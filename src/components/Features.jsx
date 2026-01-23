import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { FaFileAlt, FaBrain, FaCode } from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt size={36} />,
    title: "AI Resume Analyzer",
    description:
      "Upload your resume and get instant AI-powered analysis with improvement suggestions.",
  },
  {
    icon: <FaBrain size={36} />,
    title: "Skill Gap Finder",
    description:
      "Identify missing skills by comparing your resume with job role requirements.",
  },
  {
    icon: <FaCode size={36} />,
    title: "LaTeX Resume Generator",
    description:
      "Generate professional LaTeX resume templates with clean formatting.",
  },
];

const Features = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom>
          Key Features
        </Typography>

        <Grid container spacing={4} mt={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2, color: "primary.main" }}>
                    {feature.icon}
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
