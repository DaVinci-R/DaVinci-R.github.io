import React, { useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

const questions = [
  {
    question: "你更喜欢关注外部世界还是你自己的内心世界？",
    options: [
      { label: "外部世界", value: "E" },
      { label: "内心世界", value: "I" }
    ]
  },
  {
    question: "你更倾向于注重具体的细节还是整体的概念和未来的可能性？",
    options: [
      { label: "具体的细节", value: "S" },
      { label: "整体的概念", value: "N" }
    ]
  },
  {
    question: "你更喜欢通过逻辑和客观分析做决策，还是通过情感和主观价值做决策？",
    options: [
      { label: "逻辑和客观分析", value: "T" },
      { label: "情感和主观价值", value: "F" }
    ]
  },
  {
    question: "你更喜欢有计划和组织的生活方式，还是喜欢灵活和随意的生活方式？",
    options: [
      { label: "有计划和组织", value: "J" },
      { label: "灵活和随意", value: "P" }
    ]
  },
  {
    question: "你在社交场合中更活跃还是更安静？",
    options: [
      { label: "活跃", value: "E" },
      { label: "安静", value: "I" }
    ]
  },
  {
    question: "你更注重现在的实际情况还是未来的可能性？",
    options: [
      { label: "现在的实际情况", value: "S" },
      { label: "未来的可能性", value: "N" }
    ]
  },
  {
    question: "在做决定时你更注重事实还是情感？",
    options: [
      { label: "事实", value: "T" },
      { label: "情感", value: "F" }
    ]
  },
  {
    question: "你更喜欢遵循一个既定计划还是随时调整？",
    options: [
      { label: "遵循既定计划", value: "J" },
      { label: "随时调整", value: "P" }
    ]
  }
];

const explanations = {
  E: "外向 (Extraversion): 喜欢关注外部世界",
  I: "内向 (Introversion): 喜欢关注内心世界",
  S: "感觉 (Sensing): 注重具体的细节",
  N: "直觉 (Intuition): 注重整体的概念和未来的可能性",
  T: "思考 (Thinking): 通过逻辑和客观分析做决策",
  F: "情感 (Feeling): 通过情感和主观价值做决策",
  J: "判断 (Judging): 喜欢有计划和组织的生活方式",
  P: "知觉 (Perceiving): 喜欢灵活和随意的生活方式"
};

function MBTITest({ handleBack }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnswer = (value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [value]: prevAnswers[value] + 1,
    }));
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const result = (
      `${answers.E > answers.I ? 'E' : 'I'}` +
      `${answers.S > answers.N ? 'S' : 'N'}` +
      `${answers.T > answers.F ? 'T' : 'F'}` +
      `${answers.J > answers.P ? 'J' : 'P'}`
    );
    setResult(result);
  };

  return (
    <Container>
      {result ? (
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>你的 MBTI 类型是: {result}</Typography>
          <Typography variant="body1">
            {result.split('').map(letter => (
              <div key={letter}>
                <strong>{letter}:</strong> {explanations[letter]}
              </div>
            ))}
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography variant="h5" gutterBottom>{questions[currentQuestionIndex].question}</Typography>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleAnswer(option.value)}
              fullWidth
              style={{ margin: '10px 0', padding: '10px 0' }}
            >
              {option.label}
            </Button>
          ))}
          {error && <Typography color="error">{error}</Typography>}
        </Box>
      )}
      <Button variant="contained" color="primary" onClick={handleBack} style={{ marginTop: '20px' }}>
        返回
      </Button>
    </Container>
  );
}

export default MBTITest;
