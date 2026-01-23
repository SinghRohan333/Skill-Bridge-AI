import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 8,
        py: 3,
        textAlign: "center",
        bgcolor: "#0f172a",
        color: "#e5e7eb",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} SkillBridge AI
      </Typography>

      <Typography variant="caption">
        Smart Resume Analyzer, LaTeX Template Generator & Skill Gap Finder
      </Typography>
    </Box>
  );
};

export default Footer;
