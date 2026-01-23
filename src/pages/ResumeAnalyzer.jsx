import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  FaUpload,
  FaCheckCircle,
  FaTimesCircle,
  FaLightbulb,
} from "react-icons/fa";

const ResumeAnalyzer = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Typography variant="h2" gutterBottom textAlign="center">
          Resume Analyzer
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          mb={6}
        >
          Upload your resume and analyze skill gaps using AI
        </Typography>

        {/* Upload & Job Role */}
        <Grid container spacing={4}>
          {/* Resume Upload */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Upload Resume
                </Typography>

                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<FaUpload />}
                  sx={{ py: 2 }}
                >
                  Upload PDF / Text Resume
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Job Role */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Select Job Role
                </Typography>

                <Select fullWidth defaultValue="">
                  <MenuItem value="">Choose Role</MenuItem>
                  <MenuItem value="frontend">Frontend Developer</MenuItem>
                  <MenuItem value="backend">Backend Developer</MenuItem>
                  <MenuItem value="ml">Machine Learning Engineer</MenuItem>
                  <MenuItem value="data">Data Analyst</MenuItem>
                </Select>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Analyze Button */}
        <Box textAlign="center" mt={4}>
          <Button variant="contained" size="large">
            Analyze Resume
          </Button>
        </Box>

        {/* Results Section */}
        <Box mt={8}>
          <Grid container spacing={4}>
            {/* Extracted Skills */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <FaCheckCircle /> Extracted Skills
                  </Typography>

                  <Typography color="text.secondary">
                    HTML, CSS, JavaScript, React
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Missing Skills */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <FaTimesCircle /> Missing Skills
                  </Typography>

                  <Typography color="text.secondary">
                    TypeScript, Testing, Performance Optimization
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* AI Suggestions */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <FaLightbulb /> AI Suggestions
                  </Typography>

                  <Typography color="text.secondary">
                    Add projects demonstrating TypeScript and testing skills.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ResumeAnalyzer;
