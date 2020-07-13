import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: {
      position: 'relative',
      top: 10,
      left: -80
      // paddingBottom: 0,
      // textAlign: 'left'
    }
  },
  {
    name: 'logo'
  }
);

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={`logo-div ${classes.root}`}>
      <svg
        scale="1"
        xmlns="http://www.w3.org/2000/svg"
        width="250"
        height="60"
        version="1.1"
        viewBox="0 0 22 22"
      >
        <g className="logo-text">
          <path
            d="M2.29102 1.125V2.66016H3.47461V3.49805H2.29102V7.42969C2.29102 7.68359 2.34375 7.875 2.44922 8.00391C2.55469 8.12891 2.73438 8.19141 2.98828 8.19141C3.11328 8.19141 3.28516 8.16797 3.50391 8.12109V9C3.21875 9.07812 2.94141 9.11719 2.67188 9.11719C2.1875 9.11719 1.82227 8.9707 1.57617 8.67773C1.33008 8.38477 1.20703 7.96875 1.20703 7.42969V3.49805H0.0527344V2.66016H1.20703V1.125H2.29102ZM6.52383 9H5.43984V2.66016H6.52383V9ZM5.35195 0.978516C5.35195 0.802734 5.40469 0.654297 5.51016 0.533203C5.61953 0.412109 5.77969 0.351562 5.99062 0.351562C6.20156 0.351562 6.36172 0.412109 6.47109 0.533203C6.58047 0.654297 6.63516 0.802734 6.63516 0.978516C6.63516 1.1543 6.58047 1.30078 6.47109 1.41797C6.36172 1.53516 6.20156 1.59375 5.99062 1.59375C5.77969 1.59375 5.61953 1.53516 5.51016 1.41797C5.40469 1.30078 5.35195 1.1543 5.35195 0.978516ZM9.88359 2.66016L9.91289 3.36328C10.3777 2.81641 11.0047 2.54297 11.7937 2.54297C12.6805 2.54297 13.284 2.88281 13.6043 3.5625C13.8152 3.25781 14.0887 3.01172 14.4246 2.82422C14.7645 2.63672 15.1648 2.54297 15.6258 2.54297C17.0164 2.54297 17.7234 3.2793 17.7469 4.75195V9H16.6629V4.81641C16.6629 4.36328 16.5594 4.02539 16.3523 3.80273C16.1453 3.57617 15.7977 3.46289 15.3094 3.46289C14.907 3.46289 14.573 3.58398 14.3074 3.82617C14.0418 4.06445 13.8875 4.38672 13.8445 4.79297V9H12.7547V4.8457C12.7547 3.92383 12.3035 3.46289 11.4012 3.46289C10.6902 3.46289 10.2039 3.76562 9.94219 4.37109V9H8.8582V2.66016H9.88359ZM22.6184 9.11719C21.759 9.11719 21.0598 8.83594 20.5207 8.27344C19.9816 7.70703 19.7121 6.95117 19.7121 6.00586V5.80664C19.7121 5.17773 19.8312 4.61719 20.0695 4.125C20.3117 3.62891 20.6477 3.24219 21.0773 2.96484C21.5109 2.68359 21.9797 2.54297 22.4836 2.54297C23.3078 2.54297 23.9484 2.81445 24.4055 3.35742C24.8625 3.90039 25.091 4.67773 25.091 5.68945V6.14062H20.7961C20.8117 6.76562 20.9934 7.27148 21.341 7.6582C21.6926 8.04102 22.1379 8.23242 22.677 8.23242C23.0598 8.23242 23.384 8.1543 23.6496 7.99805C23.9152 7.8418 24.1477 7.63477 24.3469 7.37695L25.009 7.89258C24.4777 8.70898 23.6809 9.11719 22.6184 9.11719ZM22.4836 3.43359C22.0461 3.43359 21.6789 3.59375 21.382 3.91406C21.0852 4.23047 20.9016 4.67578 20.8312 5.25H24.007V5.16797C23.9758 4.61719 23.8273 4.19141 23.5617 3.89062C23.2961 3.58594 22.9367 3.43359 22.4836 3.43359ZM30.6422 7.31836C30.6422 7.02539 30.5309 6.79883 30.3082 6.63867C30.0895 6.47461 29.7047 6.33398 29.1539 6.2168C28.607 6.09961 28.1715 5.95898 27.8473 5.79492C27.527 5.63086 27.2887 5.43555 27.1324 5.20898C26.9801 4.98242 26.9039 4.71289 26.9039 4.40039C26.9039 3.88086 27.1227 3.44141 27.5602 3.08203C28.0016 2.72266 28.5641 2.54297 29.2477 2.54297C29.9664 2.54297 30.5484 2.72852 30.9937 3.09961C31.443 3.4707 31.6676 3.94531 31.6676 4.52344H30.5777C30.5777 4.22656 30.4508 3.9707 30.1969 3.75586C29.9469 3.54102 29.6305 3.43359 29.2477 3.43359C28.8531 3.43359 28.5445 3.51953 28.3219 3.69141C28.0992 3.86328 27.9879 4.08789 27.9879 4.36523C27.9879 4.62695 28.0914 4.82422 28.2984 4.95703C28.5055 5.08984 28.8785 5.2168 29.4176 5.33789C29.9605 5.45898 30.4 5.60352 30.7359 5.77148C31.0719 5.93945 31.3199 6.14258 31.4801 6.38086C31.6441 6.61523 31.7262 6.90234 31.7262 7.24219C31.7262 7.80859 31.4996 8.26367 31.0465 8.60742C30.5934 8.94727 30.0055 9.11719 29.2828 9.11719C28.775 9.11719 28.3258 9.02734 27.9352 8.84766C27.5445 8.66797 27.2379 8.41797 27.0152 8.09766C26.7965 7.77344 26.6871 7.42383 26.6871 7.04883H27.7711C27.7906 7.41211 27.9352 7.70117 28.2047 7.91602C28.4781 8.12695 28.8375 8.23242 29.2828 8.23242C29.693 8.23242 30.0211 8.15039 30.2672 7.98633C30.5172 7.81836 30.6422 7.5957 30.6422 7.31836ZM35.209 1.125V2.66016H36.3926V3.49805H35.209V7.42969C35.209 7.68359 35.2617 7.875 35.3672 8.00391C35.4727 8.12891 35.6523 8.19141 35.9062 8.19141C36.0312 8.19141 36.2031 8.16797 36.4219 8.12109V9C36.1367 9.07812 35.8594 9.11719 35.5898 9.11719C35.1055 9.11719 34.7402 8.9707 34.4941 8.67773C34.248 8.38477 34.125 7.96875 34.125 7.42969V3.49805H32.9707V2.66016H34.125V1.125H35.209ZM40.8949 9.11719C40.0355 9.11719 39.3363 8.83594 38.7973 8.27344C38.2582 7.70703 37.9887 6.95117 37.9887 6.00586V5.80664C37.9887 5.17773 38.1078 4.61719 38.3461 4.125C38.5883 3.62891 38.9242 3.24219 39.3539 2.96484C39.7875 2.68359 40.2562 2.54297 40.7602 2.54297C41.5844 2.54297 42.225 2.81445 42.682 3.35742C43.1391 3.90039 43.3676 4.67773 43.3676 5.68945V6.14062H39.0727C39.0883 6.76562 39.2699 7.27148 39.6176 7.6582C39.9691 8.04102 40.4145 8.23242 40.9535 8.23242C41.3363 8.23242 41.6605 8.1543 41.9262 7.99805C42.1918 7.8418 42.4242 7.63477 42.6234 7.37695L43.2855 7.89258C42.7543 8.70898 41.9574 9.11719 40.8949 9.11719ZM40.7602 3.43359C40.3227 3.43359 39.9555 3.59375 39.6586 3.91406C39.3617 4.23047 39.1781 4.67578 39.1078 5.25H42.2836V5.16797C42.2523 4.61719 42.1039 4.19141 41.8383 3.89062C41.5727 3.58594 41.2133 3.43359 40.7602 3.43359ZM50.5828 5.90039C50.5828 6.86523 50.3621 7.64258 49.9207 8.23242C49.4793 8.82227 48.8816 9.11719 48.1277 9.11719C47.3582 9.11719 46.7527 8.87305 46.3113 8.38477V11.4375H45.2273V2.66016H46.2176L46.2703 3.36328C46.7117 2.81641 47.325 2.54297 48.1102 2.54297C48.8719 2.54297 49.4734 2.83008 49.9148 3.4043C50.3602 3.97852 50.5828 4.77734 50.5828 5.80078V5.90039ZM49.4988 5.77734C49.4988 5.0625 49.3465 4.49805 49.0418 4.08398C48.7371 3.66992 48.3191 3.46289 47.7879 3.46289C47.1316 3.46289 46.6395 3.75391 46.3113 4.33594V7.36523C46.6355 7.94336 47.1316 8.23242 47.7996 8.23242C48.3191 8.23242 48.7313 8.02734 49.0359 7.61719C49.3445 7.20312 49.4988 6.58984 49.4988 5.77734Z"
            fill="rgba(0,0,0,1)"
            shapeRendering="geometricPrecision"
          />
        </g>
        <g className="logo-lines" transform="translate(38,0)">
          <line
            x1="0"
            x2="12"
            y1="1"
            y2="1"
            shapeRendering="geometricPrecision"
            stroke="#EC5D5D"
          />

          <line
            x1="0"
            x2="6"
            y1="11"
            y2="11"
            shapeRendering="geometricPrecision"
            stroke="#EC5D5D"
          />

          <line
            x1="9"
            x2="12"
            y1="11"
            y2="11"
            shapeRendering="geometricPrecision"
            stroke="#EC5D5D"
          />
        </g>
      </svg>
    </div>
  );
};

export { Logo };

// <svg
//   width="51"
//   height="12"
//   viewBox="0 0 51 12"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// ></svg>;
