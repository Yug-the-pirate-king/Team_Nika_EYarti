import svgPaths from "./svg-1dv4j6k58u";
import imgUser from "figma:asset/f23c972657c4d43a245a8d7677cc9d9597c9ab7b.png";
import imgUser1 from "figma:asset/4a472ebe243c30b7e471886b244eab3815eabf31.png";
import imgUser2 from "figma:asset/0f935c743af1fe295fb5299a2c3811fcc4c264ab.png";

function Group() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3334">
          <g id="Group">
            <path d={svgPaths.p1570b970} id="Vector" stroke="var(--stroke-0, #006064)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p37691680} id="Vector_2" stroke="var(--stroke-0, #006064)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group />
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Background">
      <IconifyIcon />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[29px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.5px] w-[65.8px]">
        <p className="leading-[normal] whitespace-pre-wrap">EYatri</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p140fce00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <IconifyIcon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative w-full">
          <Container3 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[69.22px]">
            <p className="leading-[normal] whitespace-pre-wrap">Live Map</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
          <g id="Group">
            <path d={svgPaths.p1e882580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p179acb80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p11aa3600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p40f8e00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function IconifyIcon2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <IconifyIcon2 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] relative rounded-[6px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative w-full">
          <Container4 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[102.31px]">
            <p className="leading-[normal] whitespace-pre-wrap">My Commute</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Overlay />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p140fce00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg3 />
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <IconifyIcon3 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-[80.92px]">
            <p className="leading-[normal] whitespace-pre-wrap">My Routes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Link:margin">
      <Link />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p76c9f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <IconifyIcon4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative w-full">
          <Container6 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[54.55px]">
            <p className="leading-[normal] whitespace-pre-wrap">Passes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p36b58680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <IconifyIcon5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative w-full">
          <Container8 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[45.16px]">
            <p className="leading-[normal] whitespace-pre-wrap">Alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.41%_12.68%]" data-name="Group">
      <div className="absolute inset-[-5.01%_-5.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5944 18.3035">
          <g id="Group">
            <path d={svgPaths.p1fefe80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
            <path d={svgPaths.p24ccd000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function IconifyIcon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg6 />
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <IconifyIcon6 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-[62.77px]">
            <p className="leading-[normal] whitespace-pre-wrap">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Link:margin">
      <Link1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-full">
        <p className="leading-[normal] whitespace-pre-wrap">SIGNAL STRENGTH</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p13f446c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg7 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[137.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">Weak (Tunnel Mode)</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <IconifyIcon7 />
      <Container12 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e2e8f0] h-[8px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Background">
      <div className="absolute inset-[0_35%_0_0]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(48.0128deg, rgb(144, 164, 174) 0%, rgb(144, 164, 174) 10.248%, rgb(84, 110, 122) 10.248%, rgb(84, 110, 122) 20.496%)" }} />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Container10 />
        <Container11 />
        <Background2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Overlay1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.41%_12.68%]" data-name="Group">
      <div className="absolute inset-[-5.01%_-5.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5944 18.3035">
          <g id="Group">
            <path d={svgPaths.p1fefe80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p24ccd000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function IconifyIcon8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg8 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <IconifyIcon8 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative w-full">
          <Container14 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[62.77px]">
            <p className="leading-[normal] whitespace-pre-wrap">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container13 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="flex-[1_0_0] min-h-[89px] min-w-px relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[427px] relative size-full">
          <Container9 />
          <HorizontalBorder />
        </div>
      </div>
    </div>
  );
}

function SidebarNavigation() {
  return (
    <div className="bg-[#006064] content-stretch flex flex-col h-full items-start justify-between p-[24px] relative shrink-0 w-[260px]" data-name="Sidebar Navigation">
      <Margin />
      <Margin1 />
      <Margin2 />
      <LinkMargin />
      <Margin3 />
      <Margin4 />
      <LinkMargin1 />
      <Margin5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#006064] text-[32px] w-[332.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">Good Morning, Aarav</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[16px] w-[343.81px]">
        <p className="leading-[normal] whitespace-pre-wrap">Heading to Andheri West via Churchgate Fast</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container16 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
          <g id="Group">
            <path d={svgPaths.p18821980} id="Vector" stroke="var(--stroke-0, #1F1A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2293a000} id="Vector_2" stroke="var(--stroke-0, #1F1A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function IconifyIcon9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg9 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e8f5e9] content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Background">
      <IconifyIcon9 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#1f1a00] text-[14px] w-[123.38px]">
        <p className="leading-[normal] whitespace-pre-wrap">Solar Mode Active</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header">
      <Container15 />
      <Background3 />
    </div>
  );
}

function HeaderMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] pb-[16px] right-[48px] top-[32px]" data-name="Header:margin">
      <Header />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[18px] w-[106.3px]">
        <p className="leading-[normal] whitespace-pre-wrap">Current Trip</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[45.83%_16.67%]" data-name="Group">
      <div className="absolute inset-[-50%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 3.33333">
          <g id="Group">
            <path d={svgPaths.p184f0a80} id="Vector" stroke="var(--stroke-0, #455A64)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p242d9880} id="Vector_2" stroke="var(--stroke-0, #455A64)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p15c84580} id="Vector_3" stroke="var(--stroke-0, #455A64)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group5 />
    </div>
  );
}

function IconifyIcon10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg10 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <IconifyIcon10 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">08:45 AM</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#102027] text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Rickshaw to Station</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p335b6880} id="Vector" stroke="var(--stroke-0, #006064)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #006064)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <Group6 />
    </div>
  );
}

function IconifyIcon11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg11 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <IconifyIcon11 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#006064] text-[14px] w-[73.95px]">
        <p className="leading-[normal] whitespace-pre-wrap">Completed</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-[#006064] left-[-24px] rounded-[8px] size-[16px] top-[4px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_2px_#006064]" />
    </div>
  );
}

function Node1Completed() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Node 1: Completed">
      <Container20 />
      <BackgroundBorderShadow />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#bf360c] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">09:12 AM (Delayed)</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#102027] text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Churchgate Fast</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p2ca5c480} id="Vector" stroke="var(--stroke-0, #BF360C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg12 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <IconifyIcon12 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[14px] w-[155.17px]">
        <p className="leading-[normal] whitespace-pre-wrap">Virar Local • Platform 4</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.pa075180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg13 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic pr-[20.34px] relative shrink-0 text-white" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] relative shrink-0 text-[14px] w-[205.25px]">
        <p className="leading-[normal] whitespace-pre-wrap">Connection Tightness: Critical</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[30px] justify-center leading-[normal] opacity-90 relative shrink-0 text-[12px] w-[213.66px] whitespace-pre-wrap">
        <p className="mb-0">Rickshaw delay +7m reduced transfer</p>
        <p>window.</p>
      </div>
    </div>
  );
}

function Module1ImpactTooltip() {
  return (
    <div className="bg-[#bf360c] relative rounded-[6px] shadow-[0px_4px_12px_0px_rgba(191,54,12,0.2)] shrink-0 w-full" data-name="Module 1: Impact Tooltip">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <IconifyIcon13 />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Module1ImpactTooltipMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Module 1: Impact Tooltip:margin">
      <Module1ImpactTooltip />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
      <Container27 />
      <Module1ImpactTooltipMargin />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute bg-[#bf360c] left-[-24px] rounded-[8px] size-[16px] top-[4px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_2px_#bf360c]" />
    </div>
  );
}

function Node2TheDelayedConnection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Node 2: The Delayed Connection">
      <Container24 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">09:58 AM</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#102027] text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Walk to Office</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[14px] w-[99.78px]">
        <p className="leading-[normal] whitespace-pre-wrap">1.2 km • 15 min</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="absolute bg-[#cfd8dc] left-[-24px] rounded-[8px] size-[16px] top-[4px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_1px_#cfd8dc]" />
    </div>
  );
}

function Node3Future() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Node 3: Future">
      <Container28 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-[16px] pl-[24px] relative w-full">
        <div className="absolute bg-[#e0e0e0] bottom-[16px] left-[7px] top-[8px] w-[2px]" data-name="Vertical Lines" />
        <div className="absolute bg-[#bf360c] h-[120px] left-[6px] rounded-[2px] top-[60px] w-[4px]" data-name="Background" />
        <Node1Completed />
        <Node2TheDelayedConnection />
        <Node3Future />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[12px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">LIVE PREDICTION</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#006064] text-[14px] w-full whitespace-pre-wrap">
          <p className="leading-[21px] mb-0">Traffic on SV Road is heavier than usual.</p>
          <p className="mb-0">
            <span className="leading-[21px]">{`Recommended pace increased to `}</span>
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic">6km/h</span>
            <span className="leading-[21px]">{` to`}</span>
          </p>
          <p className="leading-[21px]">maintain connection.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-solid border-t inset-0 pointer-events-none" />
      <Container32 />
      <Container33 />
    </div>
  );
}

function LeftColumnTheRippleTimeline() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-[380px]" data-name="Left Column: The Ripple Timeline">
      <Container17 />
      <Container19 />
      <HorizontalBorder1 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#006064] content-stretch flex flex-col items-start px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase w-[89.58px]">
        <p className="leading-[normal] whitespace-pre-wrap">Platform 4</p>
      </div>
    </div>
  );
}

function BackgroundAlignFlexStart() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background:align-flex-start">
      <Background4 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#102027] text-[32px] tracking-[-0.5px] w-[254px]">
        <p className="leading-[normal] whitespace-pre-wrap">Churchgate Fast</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[18px] w-[190.06px]">
        <p className="leading-[normal] whitespace-pre-wrap">Borivali → Churchgate</p>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="pointer-events-none relative rounded-[14px] shrink-0 size-[28px]" data-name="User">
      <div className="absolute inset-0 overflow-hidden rounded-[14px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUser} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[14px]" />
    </div>
  );
}

function ImgUserMargin() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-[18px]" data-name="Img - User:margin">
      <User />
    </div>
  );
}

function User1() {
  return (
    <div className="pointer-events-none relative rounded-[14px] shrink-0 size-[28px]" data-name="User">
      <div className="absolute inset-0 overflow-hidden rounded-[14px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUser1} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[14px]" />
    </div>
  );
}

function ImgUserMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-[18px]" data-name="Img - User:margin">
      <User1 />
    </div>
  );
}

function User2() {
  return (
    <div className="pointer-events-none relative rounded-[14px] shrink-0 size-[28px]" data-name="User">
      <div className="absolute inset-0 overflow-hidden rounded-[14px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUser2} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[14px]" />
    </div>
  );
}

function ImgUserMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-[18px]" data-name="Img - User:margin">
      <User2 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <ImgUserMargin />
      <ImgUserMargin1 />
      <ImgUserMargin2 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[13px] w-[128.5px]">
        <p className="leading-[normal] whitespace-pre-wrap">32 Active Observers</p>
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <div className="bg-[#f8f9fa] relative rounded-[30px] shrink-0 w-full" data-name="Social Proof">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Margin6 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function SocialProofMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Social Proof:margin">
      <SocialProof />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <BackgroundAlignFlexStart />
      <Container35 />
      <Container36 />
      <SocialProofMargin />
    </div>
  );
}

function GaussianBlurEffectSimulatedViaTextShadow() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Gaussian Blur Effect simulated via text-shadow">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[#536dfe] text-[56px] text-right text-shadow-[0px_0px_12px_rgba(83,109,254,0.3)] w-[152.39px]">
        <p className="leading-[56px] whitespace-pre-wrap">3 min</p>
      </div>
    </div>
  );
}

function GaussianBlurEffectSimulatedViaTextShadowMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Gaussian Blur Effect simulated via text-shadow:margin">
      <GaussianBlurEffectSimulatedViaTextShadow />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(83,109,254,0.1)] content-stretch flex flex-col items-end px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#536dfe] text-[12px] text-right w-[97.34px]">
        <p className="leading-[normal] whitespace-pre-wrap">High Confidence</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Overlay2 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <GaussianBlurEffectSimulatedViaTextShadowMargin />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[14px] text-right tracking-[1px] uppercase w-[96.55px]">
        <p className="leading-[normal] whitespace-pre-wrap">Arriving In</p>
      </div>
      <Margin7 />
    </div>
  );
}

function Module2ConfidenceHorizon() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Module 2: Confidence Horizon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[40px] relative w-full">
          <Container34 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#102027] text-[18px] w-[116.59px]">
        <p className="leading-[normal] whitespace-pre-wrap">Train Density</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[14px] w-[229.47px]">
        <p className="leading-[normal] whitespace-pre-wrap">Based on real-time weight sensors</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Heading1 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[6px] h-full items-center relative shrink-0" data-name="Container">
      <div className="bg-[#e8f5e9] rounded-[4px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[12px] w-[35.98px]">
        <p className="leading-[normal] whitespace-pre-wrap">Empty</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[6px] h-full items-center relative shrink-0" data-name="Container">
      <div className="bg-[#ffecb3] rounded-[4px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[12px] w-[25.39px]">
        <p className="leading-[normal] whitespace-pre-wrap">Mod</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[6px] h-full items-center relative shrink-0" data-name="Container">
      <div className="bg-[#bf360c] rounded-[4px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[12px] w-[19.59px]">
        <p className="leading-[normal] whitespace-pre-wrap">Full</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative self-stretch shrink-0" data-name="Container">
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container43 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#ffecb3] content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bf360c] text-[12px] text-center w-[6.8px]">
        <p className="leading-[normal] whitespace-pre-wrap">L</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#bf360c] content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[25.45px]">
        <p className="leading-[normal] whitespace-pre-wrap">GEN</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#bf360c] content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[25.45px]">
        <p className="leading-[normal] whitespace-pre-wrap">GEN</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#ffecb3] content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bf360c] text-[12px] text-center w-[15.92px]">
        <p className="leading-[normal] whitespace-pre-wrap">FC</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#e8f5e9] content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b5e20] text-[12px] text-center w-[15.92px]">
        <p className="leading-[normal] whitespace-pre-wrap">FC</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#e8f5e9] content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b5e20] text-[12px] text-center w-[6.8px]">
        <p className="leading-[normal] whitespace-pre-wrap">L</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#ffecb3] content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bf360c] text-[12px] text-center w-[25.45px]">
        <p className="leading-[normal] whitespace-pre-wrap">GEN</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#ffecb3] content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bf360c] text-[12px] text-center w-[25.45px]">
        <p className="leading-[normal] whitespace-pre-wrap">GEN</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#bf360c] content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[25.45px]">
        <p className="leading-[normal] whitespace-pre-wrap">GEN</p>
      </div>
    </div>
  );
}

function HeatmapGraphic() {
  return (
    <div className="content-stretch flex gap-[2px] h-[48px] items-start justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Heatmap Graphic">
      <Background5 />
      <Background6 />
      <Background7 />
      <Background8 />
      <Background9 />
      <Background10 />
      <Background11 />
      <Background12 />
      <Background13 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[14px] w-[213.58px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Help others: How's your coach?`}</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M5 12H19" id="Vector" stroke="var(--stroke-0, #455A64)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon14() {
  return (
    <div className="relative shrink-0" data-name="iconify-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Svg14 />
      </div>
    </div>
  );
}

function ButtonLessCrowded() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[3px] relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - Less Crowded">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <IconifyIcon14 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M5 12H19M12 5V19" id="Vector" stroke="var(--stroke-0, #455A64)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon15() {
  return (
    <div className="relative shrink-0" data-name="iconify-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Svg15 />
      </div>
    </div>
  );
}

function ButtonMoreCrowded() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[3px] relative rounded-[24px] shrink-0 size-[48px]" data-name="Button - More Crowded">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <IconifyIcon15 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <ButtonLessCrowded />
      <ButtonMoreCrowded />
    </div>
  );
}

function OneTapFeedback() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[6px] shrink-0 w-full" data-name="One-Tap Feedback">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container47 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Module6StationPulse() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Module 6: Station Pulse">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
        <Container40 />
        <HeatmapGraphic />
        <OneTapFeedback />
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p137ec1c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg16 />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Overlay">
      <IconifyIcon16 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[129.23px]">
        <p className="leading-[normal] whitespace-pre-wrap">Ghost Mode Ready</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[192.81px]">
        <p className="leading-[normal] whitespace-pre-wrap">Dead-reckoning active for tunnels</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Overlay3 />
      <Container50 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon17() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-50 relative shrink-0" data-name="iconify-icon">
      <Svg17 />
    </div>
  );
}

function Module3GhostModeStatusMini() {
  return (
    <div className="bg-[#455a64] relative rounded-[8px] shrink-0 w-full" data-name="Module 3: Ghost Mode Status (Mini">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Container49 />
          <IconifyIcon17 />
        </div>
      </div>
    </div>
  );
}

function RightColumnConfidencePulse() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[664px]" data-name="Right Column: Confidence & Pulse">
      <Module2ConfidenceHorizon />
      <Module6StationPulse />
      <Module3GhostModeStatusMini />
    </div>
  );
}

function DashboardGrid() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-start justify-center left-[48px] right-[48px] top-[147px]" data-name="Dashboard Grid">
      <LeftColumnTheRippleTimeline />
      <RightColumnConfidencePulse />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-[16.67%] left-1/4 right-1/4 top-[16.67%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-8.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0005 18.0002">
          <g id="Group">
            <path d={svgPaths.p1d903c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1209c4c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <Group7 />
    </div>
  );
}

function IconifyIcon18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg18 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#536dfe] content-stretch flex gap-[12px] h-[60px] items-center justify-center px-[40px] relative rounded-[30px] shadow-[0px_8px_24px_0px_rgba(83,109,254,0.3)] shrink-0 w-[677.33px]" data-name="Button">
      <IconifyIcon18 />
      <div className="flex flex-col font-['Liberation_Sans:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[113.28px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`I'M RUNNING`}</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
          <g id="Group">
            <path d={svgPaths.p1a0d9580} id="Vector" stroke="var(--stroke-0, #455A64)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1ba226c0} id="Vector_2" stroke="var(--stroke-0, #455A64)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d="M5 11.6667H0.833333V15.8333" id="Vector_3" stroke="var(--stroke-0, #455A64)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group8 />
    </div>
  );
}

function IconifyIcon19() {
  return (
    <div className="relative shrink-0" data-name="iconify-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Svg19 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[60px] items-center justify-center px-[42px] py-[2px] relative rounded-[30px] shrink-0 w-[382.67px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#cfd8dc] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <IconifyIcon19 />
      <div className="flex flex-col font-['Liberation_Sans:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#455a64] text-[18px] text-center w-[82.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">Find Next</p>
      </div>
    </div>
  );
}

function ActionFooter() {
  return (
    <div className="absolute bottom-[-15px] content-stretch flex gap-[24px] items-start justify-center left-[48px] right-[48px]" data-name="Action Footer">
      <Button />
      <Button1 />
    </div>
  );
}

function MainScreen() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Main Screen">
      <HeaderMargin />
      <DashboardGrid />
      <ActionFooter />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <SidebarNavigation />
      <MainScreen />
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-[#f7fbfb] content-stretch flex items-start justify-center relative size-full" data-name="Background">
      <Container />
    </div>
  );
}