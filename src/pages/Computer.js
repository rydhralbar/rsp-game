import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Multiplayer = () => {
  const [firstGesture, setFirstGesture] = useState("");
  const [secondGesture, setSecondGesture] = useState("");
  const [firstResultEmoji, setFirstResultEmoji] = useState("");
  const [secondResultEmoji, setSecondResultEmoji] = useState("");
  const [winner, setWinner] = useState("");
  const [playerGesture, setPlayerGesture] = useState("");
  const [yourScore, setYourScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  const firstPlayer = "You";
  const secondPlayer = "Computer";

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
    let selection = gestures.find((item) => playerGesture === item.name);
    if (playerGesture === secondGesture) {
      setWinner("DRAW");
    } else if (selection?.beats !== secondGesture) {
      setWinner("win");
    } else if (selection?.beats === secondGesture) {
      setWinner("lose");
    }
  }, [secondGesture]);

  const computerAnswer = (params) => {
    const computerGesture = Math.floor(Math.random() * gestures.length);
    setSecondGesture(gestures[computerGesture].name);
    setSecondResultEmoji(gestures[computerGesture].emoji);
  };

  const makeGesture = (gesture) => {
    let selection = gestures.find((item) => gesture === item.name);

    if (!firstResultEmoji) {
      setFirstResultEmoji(selection?.emoji);
    }
    computerAnswer();
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
            <p className="text-black text-center mr-0 lg:mr-6 mb-2 font-medium">
              {firstPlayer} ({yourScore})
            </p>
            <button className="btn btn=info ml-7 mr-5 sm:mr-16 lg:mr-12">
              {firstResultEmoji ? firstResultEmoji : "..."}
            </button>
          </div>
          {/* {secondGesture && ( */}
          <div>
            <p className="text-black text-center mb-2 font-medium">
              {secondPlayer} ({botScore})
            </p>
            <button className="btn btn=info mr-0">
              {secondResultEmoji ? secondResultEmoji : "..."}
            </button>
          </div>
          {/* )} */}
        </div>
        <div>
          <p className="font-bold text-black text-center mt-6">
            {!firstResultEmoji
              ? `${firstPlayer}r turn`
              : `${winner !== "DRAW" ? firstPlayer : ""} ${
                  winner === "" ? "" : winner
                }`}
          </p>
        </div>
        <div className="flex justify-center mt-5 mb-5">
          <button
            className={`btn btn-accent ${
              firstGesture !== "" ? "btn-disabled" : "btn-active"
            } flex justify-center mr-5`}
            onClick={() => {
              makeGesture("Rock");
              setPlayerGesture("Rock");
            }}
            disabled={secondGesture}
          >
            ✊
          </button>
          <button
            className={`btn btn-accent ${
              firstGesture !== "" ? "btn-disabled" : "btn-active"
            } flex justify-center mr-5`}
            onClick={() => {
              makeGesture("Scissor");
              setPlayerGesture("Scissor");
            }}
            disabled={secondGesture}
          >
            ✌️
          </button>
          <button
            className={`btn btn-accent ${
              firstGesture !== "" ? "btn-disabled" : "btn-active"
            } flex justify-center`}
            onClick={() => {
              makeGesture("Paper");
              setPlayerGesture("Paper");
            }}
            disabled={secondGesture}
          >
            🖐
          </button>
        </div>
        {secondGesture !== "" ? (
          <div className="flex justify-center mb-5">
            <button
              className="btn btn-error mr-5"
              type="submit"
              onClick={() => {
                setFirstGesture("");
                setSecondGesture("");
                setFirstResultEmoji("");
                setSecondResultEmoji("");
                setYourScore(0);
                setBotScore(0);
              }}
            >
              RESET
            </button>
            <button
              className="btn btn-info"
              type="submit"
              onClick={() => {
                if (winner === "win") {
                  const score = yourScore + 10;
                  setYourScore(score);
                } else if (winner === "lose") {
                  const score = botScore + 10;
                  setBotScore(score);
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
