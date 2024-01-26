import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // 当 src 变化时，重置加载和错误状态
    setLoading(false);
    setError("");
  }, [src]); // 依赖于 src，当 src 变化时运行

  const handlePlayPause = () => {
    if (audioRef.current) {
      setLoading(true);
      if (audioRef.current.paused) {
        audioRef.current.play().catch((e) => {
          setError("音频加载失败");
          setLoading(false);
        });
      } else {
        audioRef.current.pause();
        setLoading(false);
      }
    }
  };

  const handleOnLoadedData = () => {
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <audio
        ref={audioRef}
        src={src}
        className="w-full mb-4"
        onLoadedData={handleOnLoadedData}
        onError={() => setError("音频加载失败")}
      />
      {loading && <p>正在加载...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handlePlayPause}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Play/Pause
      </button>
    </div>
  );
};

export default AudioPlayer;
