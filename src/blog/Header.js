import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Logo from "../assest/logob.png";

function Header(props) {
  const { sections, title } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mystyle = {
    fontWeight: "bold",
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <img src={Logo} style={{ height: 75}} />
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {/* {title} */}
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button> */}
        <Tabs value={value} onChange={handleChange} sx={{
            '& .MuiTabs-indicator': { backgroundColor: 'black' },
            '& .MuiTab-root': { color: 'black'  },
            '& .Mui-selected': { color: 'gray' },
            fontFamily: "NeutralFace"
          }}>
            <Tab value="one" label="About" href="#abo"/>
            <Tab value="four" label="blog" href="#blog" />
            <Tab value="two" label="Projects" href="#pro" />
            <Tab value="three" label="GET IN TOUCH" style={{background: 'silver',color:"black", borderRadius:10}}  href="#getIn" />
          </Tabs>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
