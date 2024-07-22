import React, { useState } from 'react';
import { Button, Container, Box } from '@mui/material';
import MBTITest from './components/MBTITest';
import Divination from './components/Divination';
import Horoscope from './components/Horoscope';
import Footer from './Footer';  // 引入Footer组件

function App() {
  const [showTest, setShowTest] = useState(false);
  const [showDivination, setShowDivination] = useState(false);
  const [showHoroscope, setShowHoroscope] = useState(false);
  const [showUploadPDF, setShowUploadPDF] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
    setShowDivination(false);
    setShowHoroscope(false);
    setShowUploadPDF(false);
  };

  const handleShowDivination = () => {
    setShowDivination(true);
    setShowTest(false);
    setShowHoroscope(false);
    setShowUploadPDF(false);
  };

  const handleShowHoroscope = () => {
    setShowHoroscope(true);
    setShowTest(false);
    setShowDivination(false);
    setShowUploadPDF(false);
  };

  const handleBack = () => {
    setShowTest(false);
    setShowDivination(false);
    setShowHoroscope(false);
    setShowUploadPDF(false);
  };

  return (
    <Container maxWidth="sm" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      {!showTest && !showDivination && !showHoroscope && !showUploadPDF && (
        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={handleStartTest} fullWidth style={{ marginBottom: '20px', padding: '10px 0' }}>
            MBTI 人格测试
          </Button>
          <Button variant="contained" color="secondary" onClick={handleShowDivination} fullWidth style={{ marginBottom: '20px', padding: '10px 0' }}>
            易经算卦
          </Button>
          <Button variant="contained" color="success" onClick={handleShowHoroscope} fullWidth style={{ marginBottom: '20px', padding: '10px 0' }}>
            每日运势
          </Button>
        </Box>
      )}
      {showTest && <MBTITest handleBack={handleBack} />}
      {showDivination && <Divination handleBack={handleBack} />}
      {showHoroscope && <Horoscope handleBack={handleBack} />}
      <Footer />  {/* 添加Footer组件 */}
    </Container>
  );
}

export default App;
