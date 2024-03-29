import React, { useState, useEffect, useMemo, useCallback } from "react";

interface YearAndSetSelectorProps {
  onSelect: (basePath: string) => void;
  testType: string;
}

interface YearData {
  year: string;
  monthsAndSets: { [month: string]: string[] };
}

const YearAndSetSelector: React.FC<YearAndSetSelectorProps> = ({
  onSelect,
  testType,
}) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [set, setSet] = useState("");
  const [data, setData] = useState<YearData[]>([]);

  // 加入 useMemo 钩子
  const monthOptions = useMemo(() => {
    if (!year) return [];
    const selectedYearData = data.find((item) => item.year === year);
    return Object.keys(selectedYearData?.monthsAndSets || {});
  }, [year, data]);

  const setOptions = useMemo(() => {
    if (!month || !year) return [];
    const selectedYearData = data.find((item) => item.year === year);
    return selectedYearData?.monthsAndSets[month] || [];
  }, [month, year, data]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((allData) => {
        const testData = allData[testType]; // 选择 CET4 或 CET6 的数据
        console.log("Loaded data for", testType, testData);
        setData(testData);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [testType]); // 添加 testType 作为依赖项

  useEffect(() => {
    // 当年份改变时，重置月份和套数的选择
    setMonth("");
    setSet("");
  }, [year]);

  useEffect(() => {
    // 当月份改变时，重置套数的选择
    setSet("");
  }, [month]);

  const handleYearChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setYear(e.target.value);
    },
    []
  );

  const handleMonthChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setMonth(e.target.value);
    },
    []
  );

  const handleSetChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSet(e.target.value);
    },
    []
  );

  const handleSubmit = () => {
    const basePath = `/data/${testType}/${year}/${year}年${month}英语${
      testType === "CET4" ? "四" : "六"
    }级真题_${set}/`;
    onSelect(basePath);
  };

  return (
    <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
      <select
        value={year}
        onChange={handleYearChange}
        className="px-1 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      >
        <option value="">选择年份</option>
        {data.map((item) => (
          <option key={item.year} value={item.year}>
            {item.year}
          </option>
        ))}
      </select>

      <select
        value={month}
        onChange={handleMonthChange}
        className="px-1 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      >
        <option value="">选择月份</option>
        {monthOptions.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <select
        value={set}
        onChange={handleSetChange}
        className="px-1 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      >
        <option value="">选择套数</option>
        {setOptions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <button
        onClick={handleSubmit}
        className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      >
        加载数据
      </button>
    </div>
  );
};

export default YearAndSetSelector;
