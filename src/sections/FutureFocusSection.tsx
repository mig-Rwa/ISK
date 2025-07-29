import { Box, Typography } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const features = [
  {
    icon: ScienceIcon,
    title: 'Empower',
    description:
      'We equip students with the tools and confidence to pursue their passions and effect positive change.'
  },
  {
    icon: GroupsIcon,
    title: 'Engage',
    description:
      'Collaboration and communication are at the heart of every learning experience we design.'
  },
  {
    icon: SchoolIcon,
    title: 'Graduation',
    description:
      'Guiding students toward academic excellence and lifelong learning beyond the classroom.'
  },
  {
    icon: EmojiEventsIcon,
    title: 'Awarding',
    description:
      'Celebrating achievements that reflect dedication, creativity and community spirit.'
  }
];

export default function FutureFocusSection() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          color="primary.main"
          gutterBottom
        >
          WE HAVE FAITH IN OUR STUDENT FUTURE
        </Typography>
        <Typography className="text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
        Our students are talented, hardworking and full of good ideas. We encourage and empower them
          to bring their ideas to life. Hands-on opportunities are what we’re all about.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center px-4">
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  bgcolor: 'primary.light',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Icon sx={{ fontSize: 36, color: 'primary.main' }} />
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
