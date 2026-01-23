import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { FaFileCode, FaCopy, FaDownload } from "react-icons/fa";

const templates = [
  {
    title: "Classic Resume",
    description: "Clean and professional LaTeX resume template.",
  },
  {
    title: "Modern Resume",
    description: "Stylish resume with modern LaTeX formatting.",
  },
  {
    title: "Academic CV",
    description: "Best for research and academic profiles.",
  },
];

const LatexGenerator = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography variant="h2" textAlign="center" gutterBottom>
          LaTeX Resume Generator
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          mb={6}
        >
          Select a template and generate a professional LaTeX resume
        </Typography>

        {/* Template Selection */}
        <Grid container spacing={4}>
          {templates.map((template, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-6px)",
                  },
                }}
                variant="outlined"
              >
                <CardContent>
                  <FaFileCode size={36} color="#4F46E5" />

                  <Typography variant="h6" mt={2} gutterBottom>
                    {template.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {template.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Preview Section */}
        <Box mt={8}>
          <Typography variant="h4" gutterBottom>
            Template Preview
          </Typography>

          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography color="text.secondary">
                This section will show a preview of the selected resume
                template.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* LaTeX Code Output */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Generated LaTeX Code
          </Typography>

          <Card>
            <CardContent>
              <Box
                sx={{
                  bgcolor: "#0f172a",
                  color: "#e5e7eb",
                  p: 3,
                  borderRadius: 2,
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                }}
              >
                {`
\\documentclass{article}
\\begin{document}

\\textbf{Your Resume Content Here}

\\end{document}
`}
              </Box>

              <Box mt={3} display="flex" gap={2}>
                <Button variant="contained" startIcon={<FaCopy />}>
                  Copy Code
                </Button>

                <Button variant="outlined" startIcon={<FaDownload />}>
                  Download .tex
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default LatexGenerator;
