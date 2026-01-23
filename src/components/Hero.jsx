import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)",
          color: "white",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <FaRobot size={60} />
            </motion.div>

            <Typography variant="h1">SkillBridge AI</Typography>

            <Typography variant="h6" sx={{ maxWidth: 700 }}>
              Smart Resume Analyzer, LaTeX Template Generator & Skill Gap Finder
              using AI
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="contained" color="secondary" size="large">
                Analyze Resume
              </Button>

              <Button variant="outlined" color="inherit" size="large">
                View Templates
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Hero;
