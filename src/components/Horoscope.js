import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Horoscope({ handleBack }) {
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [horoscope, setHoroscope] = useState('');

  const calculateHoroscope = () => {
    const date = new Date(birthdate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const sign = getZodiacSign(month, day);
    const fortunes = {
      "Aries": "今日你将会充满活力，勇敢面对挑战。",
      "Taurus": "今天是个享受宁静和舒适的好日子。",
      "Gemini": "你会遇到许多有趣的人和事情。",
      "Cancer": "家庭是你今天的重心，享受与家人在一起的时光。",
      "Leo": "今天你会感到自信和受到关注。",
      "Virgo": "你需要关注细节，今天适合整理和计划。",
      "Libra": "今天适合与他人合作，你会发现和谐与平衡。",
      "Scorpio": "今天你会发现自己的内心力量，面对挑战。",
      "Sagittarius": "今天适合冒险和探索新事物。",
      "Capricorn": "你会专注于工作和目标，今天会有好的进展。",
      "Aquarius": "今天适合社交和创意活动，你会遇到志同道合的人。",
      "Pisces": "今天适合沉思和创作，享受内心的宁静。"
    };
    setHoroscope(fortunes[sign]);
  };

  const getZodiacSign = (month, day) => {
    const signs = {
      Capricorn: [12, 22, 1, 19],
      Aquarius: [1, 20, 2, 18],
      Pisces: [2, 19, 3, 20],
      Aries: [3, 21, 4, 19],
      Taurus: [4, 20, 5, 20],
      Gemini: [5, 21, 6, 20],
      Cancer: [6, 21, 7, 22],
      Leo: [7, 23, 8, 22],
      Virgo: [8, 23, 9, 22],
      Libra: [9, 23, 10, 22],
      Scorpio: [10, 23, 11, 21],
      Sagittarius: [11, 22, 12, 21]
    };
    for (const sign in signs) {
      const [startMonth, startDay, endMonth, endDay] = signs[sign];
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return sign;
      }
    }
    return "Capricorn";
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>每日运势</Typography>
      <Box mb={2}>
        <TextField
          label="请输入您的出生日期(YYYY-MM-DD)"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="请输入您的性别"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={calculateHoroscope} fullWidth style={{ marginTop: '20px' }}>
          计算运势
        </Button>
      </Box>
      {horoscope && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>今日运势</Typography>
          <Typography>{horoscope}</Typography>
        </Box>
      )}
      <Button variant="contained" color="primary" onClick={handleBack} style={{ marginTop: '20px' }}>
        返回
      </Button>
    </Container>
  );
}

export default Horoscope;
