import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Multiplayer = () => {
  const [firstGesture, setFirstGesture] = useState("");
  const [secondGesture, setSecondGesture] = useState("");
  const [firstResultEmoji, setFirstResultEmoji] = useState("");
  const [secondResultEmoji, setSecondResultEmoji] = useState("");
  const [winner, setWinner] = useState("");
  const [firstScore, setFirstScore] = useState(0);
  const [secondScore, setSecondScore] = useState(0);

  const firstPlayer = "Player 1";
  const secondPlayer = "Player 2";

  const gestures = [
    {
      name: "Rock",
      emoji: "✊",
      beats: "Paper",
    },
    {
      name: "Scissor",
      emoji: "✌️",
      beats: "Rock",
    },
    {
      name: "Paper",
      emoji: "🖐",
      beats: "Scissor",
    },
  ];

  useEffect(() => {
    let selection = gestures.find((item) => firstGesture === item.name);
    if (firstGesture === secondGesture) {
      setWinner("DRAW");
    } else if (selection?.beats !== secondGesture) {
      setWinner(`${firstPlayer}`);
    } else if (selection?.beats === secondGesture) {
      setWinner(`${secondPlayer}`);
    }
  }, [firstGesture, secondGesture]);

  const makeGesture = (gesture) => {
    const selection = gestures.find((item) => gesture === item.name);
    if (!firstResultEmoji) {
      setFirstResultEmoji(selection?.emoji);
    } else if (firstResultEmoji) {
      setSecondResultEmoji(selection?.emoji);
    }
    gestures.forEach((item) => {
      if (gesture === item.name) {
        if (firstGesture && !secondGesture) {
          setSecondGesture(gesture);
        } else {
          setFirstGesture(gesture);
        }
      }
    });
    // computerAnswer();
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center overflow-hidden">
      <div className="container bg-amber-400 mx-10 rounded-2xl">
        <div className="flex justify-center pt-14">
          <p className="font-semibold font-serif text-black sm:text-2xl lg:text-5xl">
            Happy playing!
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <div>
            <p className="text-black text-center mr-5 lg:mr-6 mb-2 font-medium">
              {firstPlayer} ({firstScore})
            </p>
            <button className="btn btn=info mr-0 sm:mr-10">
              {firstGesture
                ? secondGesture
                  ? firstResultEmoji
                  : "❓❓"
                : "..."}
            </button>
          </div>
          {/* {secondGesture && ( */}
          <div>
            <p className="text-black text-center mb-2 font-medium">
              {secondPlayer} ({secondScore})
            </p>
            <button className="btn btn=info">
              {secondGesture ? secondResultEmoji : "..."}
            </button>
          </div>
          {/* )} */}
        </div>
        <div>
          <p className="font-bold text-black text-center mt-6">
            {!firstGesture || !secondGesture
              ? `${firstGesture ? secondPlayer : firstPlayer}'s turn`
              : `${winner} ${winner !== "DRAW" ? "wins" : ""}`}
          </p>
        </div>
        <div className="flex justify-center mt-5 mb-5">
          <button
            className="btn btn-accent btn-active flex justify-center mr-5"
            onClick={() => {
              makeGesture("Rock");
            }}
            disabled={secondGesture}
          >
            ✊
          </button>
          <button
            className="btn btn-accent btn-active flex justify-center mr-5"
            onClick={() => {
              makeGesture("Scissor");
            }}
            disabled={secondGesture}
          >
            ✌️
          </button>
          <button
            className="btn btn-accent btn-active flex justify-center"
            onClick={() => {
              makeGesture("Paper");
            }}
            disabled={secondGesture}
          >
            🖐
          </button>
        </div>
        {(firstGesture !== "") & (secondGesture !== "") ? (
          <div className="flex justify-center mb-5">
            <button
              className="btn btn-error mr-5"
              type="submit"
              onClick={() => {
                setFirstGesture("");
                setSecondGesture("");
                setFirstResultEmoji("");
                setSecondResultEmoji("");
                setFirstScore(0);
                setSecondScore(0);
              }}
            >
              Reset
            </button>
            <button
              className="btn btn-info"
              type="submit"
              onClick={() => {
                if (winner === firstPlayer) {
                  const score = firstScore + 10;
                  setFirstScore(score);
                } else if (winner === secondPlayer) {
                  const score = secondScore + 10;
                  setSecondScore(score);
                }
                setFirstGesture("");
                setSecondGesture("");
                setFirstResultEmoji("");
                setSecondResultEmoji("");
              }}
            >
              Play again
            </button>
          </div>
        ) : null}
        <div className="flex justify-center mt-5 mb-5">
          <Link to="/">
            <button className="btn btn-primary">Switch mode</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Multiplayer;
