import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import banner from "../assest/javidBanner2.png"
import About from './About';
import Certificate from './Certificate';
import AboutMe from './AboutMe';
import Interests from './Interests';
import Project from './Project';
import AutoPlay from './AutoPlay';
import SildeImage from '../additional/SlideImage';

const sections = [
  { title: 'Podcast', url: '#' },
  { title: 'YouTube', url: '#' }
];

const mainFeaturedPost = {
  title: 'Java programming training',
  description:
    "Why should we learn Java? Currently, Java programmers are one of the most popular workforces for many employers. Every day, many employers around the world are looking for Java programmers. These forces create and develop various applications and websites with the help of this programming language.",
  image: 'https://source.unsplash.com/random/200x200?sig=1',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Introduction to Java',
    date: 'Tuesday Jul 25 "episode 1"',
    description:
    'آشنایی با جاوا، تاریخچه جاوا، ویژگی های جاوا و چرا جاوا مهم است؟',
    image: 'https://drive.google.com/file/d/1DiTkBeedg7zlQYnlA3k3qSoNIY72wnsN/view?usp=sharing',
    imageLabel: 'Image Text',
    address: 'https://javidmolaei.podbean.com/e/%d8%a2%d8%b4%d9%86%d8%a7%db%8c%db%8c-%d8%a8%d8%a7-%d8%ac%d8%a7%d9%88%d8%a7/'
  },
  {
    title: 'Basic Java Concepts',
    date: 'Tuesday Aug 08 "episode 2"',
    description:
      'در این اپیزود راجع به مفاهیم اولیه جاوا نظیر محیط های توسعه نرم افزار، متغیرها، انواع داده اولیه، عملگرها، شروط حلقه ها و متد صحبت خواهیم کرد.      ',
    image: 'https://picsum.photos/200/300',
    imageLabel: 'Image Text',
    address: 'https://javidmolaei.podbean.com/e/%d9%85%d9%81%d8%a7%d9%87%db%8c%d9%85-%d8%a7%d9%88%d9%84%db%8c%d9%87-%d8%ac%d8%a7%d9%88%d8%a7/'
  },
  {
    title: 'Basic concepts of Java Part II',
    date: 'Tuesday Aug 15 "episode 3"',
    description:
      'توی این بخش راجب مفاهیم پایه ای جاوا از قبیل قوانين نام‌گذاری،  ورودی و خروجی، ساختار های کنترلی آرایه و رشته صحبت می‌کنیم.      ',
    image: 'https://picsum.photos/200/300',
    imageLabel: 'Image Text',
    address: 'https://javidmolaei.podbean.com/e/%d9%85%d9%81%d8%a7%d9%87%db%8c%d9%85-%d9%be%d8%a7%db%8c%d9%87-%d8%ac%d8%a7%d9%88%d8%a7-%d8%a8%d8%ae%d8%b4-%d8%af%d9%88%d9%85/'
  },{
    title: 'Concepts of object oriented programming',
    date: 'Saturday Aug 26 "episode 4"',
    description:
      'در این اپیزود در مورد مفاهیم برنامه نویسی شی گرا و استفاده آن مفاهیم در جاوا صحبت میکنیم',
    image: 'https://picsum.photos/200/300',
    imageLabel: 'Image Text',
    address: 'https://javidmolaei.podbean.com/e/%d9%85%d9%81%d8%a7%d9%87%db%8c%d9%85-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%db%8c-%d8%b4%db%8c-%da%af%d8%b1%d8%a7/'
  },{
    title: 'Concepts of object oriented programming part two',
    date: 'Sunday Aug 27 "episode 5"',
    description:
      'در این اپیزود نیز مفاهیم و اصول برنامه نویسی شی گرا مورد بررسی قرار میگیرد.',
    image: 'https://picsum.photos/200/300',
    imageLabel: 'Image Text',
    address: 'https://javidmolaei.podbean.com/e/%d9%85%d9%81%d8%a7%d9%87%db%8c%d9%85-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%db%8c%d8%b4%db%8c-%da%af%d8%b1%d8%a7-%d8%a8%d8%ae/'
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <About />
          <Certificate />
          <AboutMe />
          <Interests />
          <Project />
          <h1 className='h1-man'>Blog</h1>
          <MainFeaturedPost post={mainFeaturedPost} />
          <h1 className='h1-man'>Radio Java</h1>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
        <SildeImage />
        {/* <AutoPlay /> */}
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
