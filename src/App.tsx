import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./pages/Header";
import YearAndSetSelector from "./components/YearAndSetSelector";
import Writing from "./components/Writing/Writing";
import ListeningComprehension from "./components/ListeningComprehension/ListeningComprehension";
import ReadingComprehension from "./components/ReadingComprehension/ReadingComprehension";
import Translation from "./components/Translation/Translation";
import ContactForm from "./pages/ContactForm";
import ScoreStatistics, { TableRecord } from "./components/ScoreStatistics";
import HeroSection from "./pages/HeroSection";

function MainApp() {
  const [basePath, setBasePath] = useState("");
  const [records, setRecords] = useState<TableRecord[]>([]);
  let location = useLocation();

  useEffect(() => {
    // 当路由变化时重置basePath
    if (location.pathname === "/") {
      setBasePath("");
    }
  }, [location]);

  const updateListeningScore = (score: number, totalQuestionsDone: number) => {
    setRecords((prevRecords) => {
      return prevRecords.map((record) => {
        if (record.category === "分数") {
          return { ...record, listeningTest: `${score} | 248.5` };
        } else if (record.category === "题目") {
          // 更新完成的题目数量
          return { ...record, listeningTest: `${totalQuestionsDone} | 25` };
        }
        return record;
      });
    });
  };

  const updateReadingScore = (score: number, completedQuestions: number) => {
    setRecords((prevRecords) => {
      return prevRecords.map((record) => {
        if (record.category === "分数") {
          return {
            ...record,
            readingTest: `${score} | ${record.readingTest.split(" | ")[1]}`,
          };
        } else if (record.category === "题目") {
          return {
            ...record,
            readingTest: `${completedQuestions} | ${
              record.readingTest.split(" | ")[1]
            }`,
          };
        }
        return record;
      });
    });
  };

  const updateListeningDuration = (duration: string) => {
    setRecords((prevRecords) => {
      return prevRecords.map((record) => {
        if (record.category === "时间") {
          return { ...record, listeningTest: `${duration}` };
        }
        return record;
      });
    });
  };

  const updateReadingDuration = (duration: string) => {
    setRecords((prevRecords) => {
      return prevRecords.map((record) => {
        if (record.category === "时间") {
          return { ...record, readingTest: `${duration}` };
        }
        return record;
      });
    });
  };

  useEffect(() => {
    // 这个函数是异步的并且返回一个Promise，它解析为TableRecord类型的数组
    const fetchRecords = async (): Promise<TableRecord[]> => {
      return [
        {
          category: "时间",
          writingTest: "",
          listeningTest: "",
          readingTest: "",
          translationTest: "",
        },
        {
          category: "题目",
          writingTest: "0 | 1",
          listeningTest: "0 | 25",
          readingTest: "0 | 30",
          translationTest: "0 | 1",
        },
        {
          category: "分数",
          writingTest: "0 | 106.5",
          listeningTest: "0 | 248.5",
          readingTest: "0 | 248.5",
          translationTest: "0 | 106.5",
        },
      ];
    };

    if (basePath) {
      fetchRecords()
        .then((data) => {
          setRecords(data);
        })
        .catch((error) => {
          console.error("Failed to fetch records:", error);
        });
    }
  }, [basePath]); // 当basePath更新时获取数据

  const handleSelect = (path: string) => {
    console.log("Selected basePath:", path);
    setBasePath(path);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col h-screen bg-white">
              <Header />
              <HeroSection />
            </div>
          }
        />
        <Route
          path="/cet4"
          element={
            <YearAndSetSelector onSelect={handleSelect} testType="CET4" />
          }
        />
        <Route
          path="/cet6"
          element={
            <YearAndSetSelector onSelect={handleSelect} testType="CET6" />
          }
        />
        <Route path="/feedback" element={<ContactForm />} />
      </Routes>
      {basePath && (
        <>
          <Writing basePath={basePath} />
          <ListeningComprehension
            basePath={basePath}
            updateListeningScore={updateListeningScore}
            updateListeningDuration={updateListeningDuration}
          />
          <ReadingComprehension
            basePath={basePath}
            updateReadingScore={updateReadingScore}
            updateReadingDuration={updateReadingDuration}
          />

          <Translation basePath={basePath} />
          <ScoreStatistics records={records} />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
