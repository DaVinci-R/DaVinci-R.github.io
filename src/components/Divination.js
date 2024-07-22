import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';

function Divination({ handleBack }) {
  const [question, setQuestion] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const hexagramData = generateHexagram();
    const interpretation = interpretHexagram(hexagramData.binaryHexagram);

    const resultData = {
      question,
      birthdate,
      gender,
      hexagram: hexagramData.hexagram,
      interpretation
    };
    setResult(resultData);
  };

  const generateHexagram = () => {
    const lines = [];
    const binaryLines = [];
    for (let i = 0; i < 6; i++) {
      const line = Math.floor(Math.random() * 4) + 6; // Generates a random number between 6 and 9
      if (line === 6) {
        lines.push("阴爻，变爻 (- -)");
        binaryLines.push(0);
      } else if (line === 7) {
        lines.push("阳爻，不变爻 (---)");
        binaryLines.push(1);
      } else if (line === 8) {
        lines.push("阴爻，不变爻 (- -)");
        binaryLines.push(0);
      } else if (line === 9) {
        lines.push("阳爻，变爻 (---)");
        binaryLines.push(1);
      }
    }
    binaryLines.reverse();
    return { hexagram: lines.join('\n'), binaryHexagram: binaryLines };
  };

  const interpretHexagram = (binaryHexagram) => {
    const hexagrams = {
      "111111": "乾卦：象征天，表示强大、积极和成功。",
      "000000": "坤卦：象征地，表示顺从、柔和和支持。",
      "101110": "屯卦：象征困难和开始，表示努力克服障碍。",
      "011110": "蒙卦：象征启蒙，表示教育和成长。",
      "010101": "需卦：象征等待，表示谨慎和耐心。",
      "101010": "讼卦：象征争论，表示需要公正和公平。",
      "000111": "师卦：象征军队，表示组织和纪律。",
      "111000": "比卦：象征伙伴，表示合作和友谊。",
      "111010": "小畜卦：象征积蓄，表示积累和耐心。",
      "010111": "履卦：象征行动，表示谨慎和慎重。",
      "111001": "泰卦：象征和谐，表示平衡和协调。",
      "100111": "否卦：象征否定，表示阻碍和困境。",
      "110110": "同人卦：象征团结，表示合作和共赢。",
      "011011": "大有卦：象征拥有，表示成功和富足。",
      "100010": "谦卦：象征谦虚，表示谦逊和低调。",
      "010001": "豫卦：象征喜悦，表示快乐和满足。",
      "010110": "随卦：象征跟随，表示顺应和适应。",
      "010010": "蛊卦：象征腐朽，表示更新和重生。",
      "101001": "临卦：象征监视，表示观察和管理。",
      "100101": "观卦：象征观察，表示思考和审视。",
      "000111": "噬嗑卦：象征咬合，表示矫正和执行。",
      "111000": "贲卦：象征装饰，表示美化和修饰。",
      "101000": "剥卦：象征剥落，表示减损和退步。",
      "000011": "复卦：象征回归，表示复苏和恢复。",
      "110011": "无妄卦：象征天真，表示真实和纯洁。",
      "100110": "大畜卦：象征大蓄，表示积累和等待。",
      "011001": "颐卦：象征养育，表示培养和保护。",
      "110010": "大过卦：象征超越，表示突破和改变。",
      "011000": "坎卦：象征水，表示陷阱和险境。",
      "000110": "离卦：象征火，表示光明和依附。",
      "100000": "咸卦：象征感应，表示吸引和感动。",
      "000001": "恒卦：象征恒常，表示持久和稳定。",
      "000101": "遁卦：象征退避，表示隐退和避让。",
      "101110": "大壮卦：象征壮大，表示扩展和成长。",
      "011101": "晋卦：象征前进，表示进步和提升。",
      "100011": "明夷卦：象征受伤，表示挫折和受难。",
      "110100": "家人卦：象征家庭，表示和谐和温暖。",
      "001011": "睽卦：象征分离，表示矛盾和分歧。",
      "011010": "蹇卦：象征艰难，表示困境和障碍。",
      "010101": "解卦：象征解脱，表示解决和释怀。",
      "110001": "损卦：象征损失，表示节约和牺牲。",
      "100001": "益卦：象征利益，表示增益和进益。",
      "101100": "夬卦：象征决断，表示果断和执行。",
      "001101": "姤卦：象征遇合，表示相遇和结合。",
      "101101": "萃卦：象征聚集，表示团聚和集会。",
      "011011": "升卦：象征上升，表示提升和晋升。",
      "110111": "困卦：象征困境，表示困扰和艰难。",
      "111101": "井卦：象征井，表示资源和基础。",
      "110000": "革卦：象征改变，表示变革和创新。",
      "000010": "鼎卦：象征鼎，表示权威和稳固。",
      "110101": "震卦：象征雷，表示动荡和变化。",
      "010011": "艮卦：象征山，表示停止和稳定。",
      "100111": "渐卦：象征渐进，表示逐步和缓慢。",
      "111001": "归妹卦：象征婚姻，表示结合和契约。",
      "011100": "丰卦：象征富饶，表示丰富和丰盈。",
      "001100": "旅卦：象征旅行，表示移动和变化。",
      "001110": "巽卦：象征风，表示渗透和传播。",
      "101011": "兑卦：象征泽，表示喜悦和和悦。",
      "100100": "涣卦：象征涣散，表示分离和瓦解。",
      "001001": "节卦：象征节制，表示控制和约束。",
      "001010": "中孚卦：象征诚信，表示真诚和信任。",
      "101001": "小过卦：象征小过，表示谨慎和细心。",
      "010111": "既济卦：象征完成，表示结束和成功。",
      "111010": "未济卦：象征未完成，表示继续和未竟。"
    };

    const hexagramKey = binaryHexagram.join('');
    return hexagrams[hexagramKey] || "这个卦象尚未定义详细解释。请参考《易经》或相关书籍。";
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>易经算卦</Typography>
      <Box mb={2}>
        <TextField
          label="请输入您的问题"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
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
        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth style={{ marginTop: '20px' }}>
          开始占卜
        </Button>
      </Box>
      {result && (
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>占卜结果</Typography>
          <Typography>问题: {result.question}</Typography>
          <Typography>出生日期: {result.birthdate}</Typography>
          <Typography>性别: {result.gender}</Typography>
          <Typography>占卜结果: {result.hexagram}</Typography>
          <Typography>解卦: {result.interpretation}</Typography>
        </Box>
      )}
      <Button variant="contained" color="primary" onClick={handleBack} style={{ marginTop: '20px' }}>
        返回
      </Button>
    </Container>
  );
}

export default Divination;
