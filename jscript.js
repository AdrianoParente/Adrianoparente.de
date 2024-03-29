window.onload = $(document).ready(function () {  
  var entries = [
    {
      image: "../assets/img/restApi.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "Rest Api",
    },
    {
      label: "REST API",
      url: "javascript:openDialog()",
      target: "_top",
    },
    {
      image: "../assets/img/angularOrginal.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "Angular",
    },
    {
      label: "ANGULAR",
      url: "javascript:openDialog()",
      target: "_top",
    },
    {
      image: "../assets/img/css.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "CSS",
    },
    {
      label: "CSS",
      url: "javascript:openDialog()",
      target: "_top",
    },
    {
      image: "../assets/img/git.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "GIT",
    },
    {
      label: "GIT",
      url: "javascript:openDialog()",
      target: "_top",
    },
    {
      image: "../assets/img/html.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "HTML",
    },
    {
      label: "HTML",
      url: "javascript:openDialog()",
      target: "_top",
    },
    {
      image: "../assets/img/scrum.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "Scrum",
    },
    {
      label: "SCRUM",
      url: "javascript:openDialog()",
      target: "_top",
    },
    {
      image: "../assets/img/material.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "Angular Material",
    },
    {
      label: "MATERIAL",
      url: "javascript:openDialog()",
      target: "_top",
    },
    {
      image: "../assets/img/typescript.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "Typescript",
    },
    {
      label: "TYPESCRIPT",
      url: "javascript:openDialog()",
      target: "_top",
    },
    {
      image: "../assets/img/javascript.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "Javascript",
    },
    {
      label: "JAVASCRIPT",
      url: "javascript:openDialog()",
      target: "_top",
    },  
    {
      image: "../assets/img/firebase.png",
      width: "50",
      height: "50",
      url: "javascript:openDialog()",
      target: "_top",
      tooltip: "firebase",
    },
    {
      label: "FIREBASE",
      url: "javascript:openDialog()",
      target: "_top",
    },          
  ];

  var settings = {
    entries: entries,
    width: 640,
    height: 480,
    radius: "90%",
    radiusMion: 75,
    bgDraw: true,
    bgColor: "var(--background-grey)",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.25,
    fontFamily: "Courier, Arial, sans-serif",
    fontSize: "25",
    fontColor: "var(--primary)",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    fontToUpperCase: true,
    tooltipFontFamily: "Courier, Arial, sans-serif",
    tooltipFontSize: "25",
    tooltipFontColor: "var(--secondary)",
    tooltipFontWeight: "normal", 
    tooltipFontStyle: "normal", 
    tooltipFontStretch: "normal", 
    tooltipFontToUpperCase: true,
    tooltipTextAnchor: "right",
    tooltipDiffX: 0,
    tooltipDiffY: 10,
    animatingSpeed: 0.01,
    animatingRadiusLimit: 1.3, 
  };
  var settings1 = {
    entries: entries,
    width: 427,
    height: 320,
    radius: "90%",
    radiusMion: 75,
    bgDraw: true,
    bgColor: "var(--background-grey)",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.25,
    fontFamily: "Courier, Arial, sans-serif",
    fontSize: "16",
    fontColor: "var(--primary)",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    fontToUpperCase: true,
    tooltipFontFamily: "Courier, Arial, sans-serif",
    tooltipFontSize: "16",
    tooltipFontColor: "var(--secondary)",
    tooltipFontWeight: "normal", 
    tooltipFontStyle: "normal", 
    tooltipFontStretch: "normal", 
    tooltipFontToUpperCase: true,
    tooltipTextAnchor: "right",
    tooltipDiffX: 0,
    tooltipDiffY: 10,
    animatingSpeed: 0.01,
    animatingRadiusLimit: 1.3,
  };
  var settings2 = {
    entries: entries,
    width: 320,
    height: 240,
    radius: "90%",
    radiusMion: 75,
    bgDraw: true,
    bgColor: "var(--background-grey)",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.25,
    fontFamily: "Courier, Arial, sans-serif",
    fontSize: "16",
    fontColor: "var(--primary)",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    fontToUpperCase: true,
    tooltipFontFamily: "Courier, Arial, sans-serif",
    tooltipFontSize: "16",
    tooltipFontColor: "var(--secondary)",
    tooltipFontWeight: "normal", 
    tooltipFontStyle: "normal", 
    tooltipFontStretch: "normal", 
    tooltipFontToUpperCase: true,
    tooltipTextAnchor: "right",
    tooltipDiffX: 0,
    tooltipDiffY: 10,
    animatingSpeed: 0.01,
    animatingRadiusLimit: 1.3,
  };
  $("#tag").svg3DTagCloud(settings);
  $("#tag1").svg3DTagCloud(settings1);
  $("#tag2").svg3DTagCloud(settings2);
});
