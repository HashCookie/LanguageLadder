import React, { useState, useEffect } from "react";
import ReadingComprehensionA from "./ReadingComprehensionA";
import ReadingComprehensionB from "./ReadingComprehensionB";
import ReadingComprehensionC from "./ReadingComprehensionC";
import { Toaster, toast } from "sonner";

interface ReadingComprehensionProps {
  basePath: string;
  attemptTimestamp: string;
  updateReadingScore: (
    score: number,
    completedQuestions: number,
    attemptTimestamp: string
  ) => void;
  updateReadingDuration: (duration: string) => void;
}
interface Answers {
  [key: string]: string;
}

const ReadingComprehension: React.FC<ReadingComprehensionProps> = ({
  basePath,
  attemptTimestamp,
  updateReadingScore,
  updateReadingDuration,
}) => {
  const scorePerBlankFillingQuestion = 3.55; // 选词填空每题分数
  const scorePerParagraphMatchingQuestion = 7.1; // 段落匹配每题分数
  const scorePerCarefulReadingQuestion = 14.2; // 仔细阅读每题分数

  const [selectedAnswer, setSelectedAnswer] = useState<Answers>({});
  const [sectionAData, setSectionAData] = useState(null);
  const [sectionBData, setSectionBData] = useState(null);
  const [sectionCData, setSectionCData] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState<Answers>({});
  const [startTime, setStartTime] = useState<Date | null>(null); // 设置开始时间

  useEffect(() => {
    if (basePath) {
      // 在开始加载新数据前，重置状态
      setSectionAData(null);
      setSectionBData(null);
      setSectionCData(null);
      setCorrectAnswers({});
      setSelectedAnswer({});
      const paperName = basePath.split("/").slice(-2, -1)[0];
      const testLevel = basePath.includes("CET4") ? "CET4" : "CET6";
      const answerPath = `/answers/${testLevel}/${paperName}.json`;

      const loadData = async () => {
        try {
          // 分别加载题目和答案数据
          const questionResponses = await Promise.all([
            fetch(`${basePath}/ReadingComprehensionA.json`),
            fetch(`${basePath}/ReadingComprehensionB.json`),
            fetch(`${basePath}/ReadingComprehensionC.json`),
          ]);

          questionResponses.forEach((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
          });

          const [dataA, dataB, dataC] = await Promise.all(
            questionResponses.map((res) => res.json())
          );

          setSectionAData(dataA);
          setSectionBData(dataB);
          setSectionCData(dataC);

          // 尝试加载答案，如果失败则继续而不抛出错误
          try {
            const answerResponse = await fetch(answerPath);
            if (answerResponse.ok) {
              const answers = await answerResponse.json();
              setCorrectAnswers(answers.ReadingComprehension);
            }
          } catch (error) {
            // 答案加载失败，可能是文件不存在，不处理错误
          }

          // 初始化用户答案
          const initialAnswers: Answers = {};
          [
            ...(dataA?.questions || []),
            ...(dataB?.questions || []),
            ...(dataC?.questions || []),
          ].forEach((question) => {
            const questionNumber = question.number;
            if (typeof questionNumber !== "undefined") {
              initialAnswers[questionNumber.toString()] = "";
            }
          });

          setSelectedAnswer(initialAnswers);
        } catch (error) {
          console.error("Error loading data:", error);
        }
      };

      loadData();
    }
  }, [basePath]);

  const handleFirstInteraction = () => {
    if (!startTime) {
      setStartTime(new Date());
    }
  };

  const handleOptionChange = (questionNumber: number, option: string) => {
    handleFirstInteraction();

    setSelectedAnswer((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: option,
    }));
  };

  const extractPaperName = (basePath: string) => {
    const regex = /(\d{4})年(\d+)月英语(四级|六级)真题_第(\d+)套/;
    const match = basePath.match(regex);
    if (match) {
      const [, year, month, level, setNumber] = match;
      const levelName = level === "四级" ? "英语四级" : "英语六级";
      return `${levelName}${year}年${month}月第${setNumber}套`;
    }
    return "未知试卷";
  };

  const handleSubmit = () => {
    const end = new Date();
    let durationInSeconds = 0;

    if (startTime) {
      durationInSeconds = Math.round(
        (end.getTime() - startTime.getTime()) / 1000
      );

      let formattedDuration = "";

      if (durationInSeconds < 60) {
        formattedDuration = `${durationInSeconds}秒`;
      } else if (durationInSeconds < 3600) {
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = durationInSeconds % 60;
        formattedDuration = `${minutes}分钟${seconds
          .toString()
          .padStart(2, "0")}秒`;
      } else {
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        const seconds = durationInSeconds % 60;
        formattedDuration = `${hours}小时${minutes
          .toString()
          .padStart(2, "0")}分钟${seconds.toString().padStart(2, "0")}秒`;
      }

      updateReadingDuration(formattedDuration); // 更新耗时

      let rawReadingScore = 0;
      Object.keys(selectedAnswer).forEach((questionNumber) => {
        const questionIndex = parseInt(questionNumber);
        const userAnswer = selectedAnswer[questionNumber];
        const correctAnswer = correctAnswers[questionNumber];

        if (userAnswer === correctAnswer) {
          if (questionIndex >= 26 && questionIndex <= 35) {
            rawReadingScore += scorePerBlankFillingQuestion;
          } else if (questionIndex >= 36 && questionIndex <= 45) {
            rawReadingScore += scorePerParagraphMatchingQuestion;
          } else if (questionIndex >= 46 && questionIndex <= 55) {
            rawReadingScore += scorePerCarefulReadingQuestion;
          }
        }
      });

      const completedQuestions = Object.keys(selectedAnswer).filter(
        (key) => selectedAnswer[key] !== ""
      ).length;
      const roundedScore = Math.round(rawReadingScore * 10) / 10;
      updateReadingScore(roundedScore, completedQuestions, attemptTimestamp); // 更新成绩

      const paperName = extractPaperName(basePath);

      // 将成绩保存到localStorage
      const scoreRecord = {
        date: new Date().toISOString(),
        score: roundedScore,
        completedQuestions,
        seconds: durationInSeconds,
        attemptId: attemptTimestamp,
        type: paperName,
      };
      const existingRecords = JSON.parse(
        localStorage.getItem("readingScores") || "[]"
      );
      existingRecords.push(scoreRecord);
      localStorage.setItem("readingScores", JSON.stringify(existingRecords));
    }
    toast.success("已提交", { duration: 1000 });
  };

  if (!sectionAData || !sectionBData || !sectionCData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-20 mt-10">
      <div className="text-base md:text-xl lg:text-2xl font-bold font-serif text-center mb-6 flex justify-between items-center">
        <h2>Part III</h2>
        <h1>Reading Comprehension</h1>
        <h2>(40 minutes)</h2>
      </div>
      <ReadingComprehensionA
        data={sectionAData}
        selectedAnswer={selectedAnswer}
        onAnswerChange={handleOptionChange}
      />
      <ReadingComprehensionB
        data={sectionBData}
        selectedAnswer={selectedAnswer}
        onAnswerChange={handleOptionChange}
      />
      <ReadingComprehensionC
        data={sectionCData}
        selectedAnswer={selectedAnswer}
        onAnswerChange={handleOptionChange}
      />
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handleSubmit}
          className="px-6 py-2.5 rounded-full text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
        >
          提交
        </button>
        <Toaster position="top-right" richColors />
      </div>
    </div>
  );
};

export default ReadingComprehension;
