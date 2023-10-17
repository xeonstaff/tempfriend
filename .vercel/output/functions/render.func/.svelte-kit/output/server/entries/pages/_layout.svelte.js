import { c as create_ssr_component, a as compute_rest_props, v as validate_component, b as add_attribute, d as compute_slots } from "../../chunks/index2.js";
import { f as fns, c as createStyles, g as globalCss, B as Box, d as dataLoaded, a as chatMessage } from "../../chunks/stores.js";
import "isomorphic-fetch";
const theme = {
  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24
  },
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400
  }
};
function getSortedBreakpoints(breakpoints, theme2) {
  if (!breakpoints) {
    return [];
  }
  const values = Object.keys(breakpoints).filter((breakpoint) => breakpoint !== "base").map((breakpoint) => [
    fns.size({ size: breakpoint, sizes: theme2.breakpoints }),
    breakpoints[breakpoint]
  ]);
  values.sort((a, b) => a[0] - b[0]);
  return values;
}
const useStyles$2 = createStyles((theme$1, { height, width, fixed, position, hiddenBreakpoint, zIndex, section, hidden }) => {
  const breakpoints = typeof width === "object" && width !== null ? getSortedBreakpoints(width, theme).reduce((acc, [breakpoint, breakpointSize]) => {
    acc[`@media (min-width: ${breakpoint + 1}px)`] = {
      width: breakpointSize,
      minWidth: breakpointSize
    };
    return acc;
  }, {}) : null;
  return {
    root: {
      darkMode: {
        backgroundColor: theme$1.fn.themeColor("dark", 7),
        [section === "navbar" ? "borderRight" : "borderLeft"]: `1px solid ${theme$1.fn.themeColor("dark", 5)}`
      },
      fontFamily: "$standard",
      ...position,
      top: position?.top || "var(--svelteui-header-height)",
      zIndex,
      height: height || "calc(100vh - var(--svelteui-header-height, 0px) - var(--svelteui-footer-height, 0px))",
      width: width?.base || "100%",
      position: fixed ? "fixed" : "static",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      [section === "navbar" ? "borderRight" : "borderLeft"]: `1px solid ${theme$1.fn.themeColor("gray", 2)}`,
      ...breakpoints,
      [`@media (max-width: ${theme$1.fn.size({
        size: hiddenBreakpoint,
        sizes: theme.breakpoints
      })}px)`]: hidden ? {
        display: "none"
      } : {}
    }
  };
});
const HorizontalSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "width",
    "height",
    "fixed",
    "position",
    "hiddenBreakpoint",
    "hidden",
    "zIndex",
    "section"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, width = void 0, height = void 0, fixed = false, position = {}, hiddenBreakpoint = "md", hidden = false, zIndex = 100, section } = $$props;
  const breakpoints = getSortedBreakpoints(width, theme).reduce(
    (acc, [breakpoint, breakpointSize]) => {
      acc[`@media (min-width: ${breakpoint + 1}px)`] = {
        [`--svelteui-${section}-width`]: `${breakpointSize}px`
      };
      return acc;
    },
    {}
  );
  const injectRoot = globalCss({
    ":root": {
      [`--svelteui-${section}-width`]: width?.base ? `${width.base}px` : "0px",
      ...breakpoints
    }
  });
  injectRoot();
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.hiddenBreakpoint === void 0 && $$bindings.hiddenBreakpoint && hiddenBreakpoint !== void 0)
    $$bindings.hiddenBreakpoint(hiddenBreakpoint);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx, classes, getStyles } = useStyles$2(
      {
        fixed,
        height,
        hiddenBreakpoint,
        position,
        width,
        zIndex,
        section,
        hidden
      },
      { name: "HorizontalSection" }
    ));
    $$rendered = `${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          root: section === "navbar" ? "nav" : "aside"
        },
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const HorizontalSection$1 = HorizontalSection;
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "width",
    "height",
    "fixed",
    "position",
    "hiddenBreakpoint",
    "hidden",
    "zIndex"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, width = void 0, height = void 0, fixed = false, position = { top: 0, left: 0 }, hiddenBreakpoint = "md", hidden = false, zIndex = 100 } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.hiddenBreakpoint === void 0 && $$bindings.hiddenBreakpoint && hiddenBreakpoint !== void 0)
    $$bindings.hiddenBreakpoint(hiddenBreakpoint);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(HorizontalSection$1, "HorizontalSection").$$render(
      $$result,
      Object.assign({}, { section: "navbar" }, { class: className }, { use }, { override }, { width }, { height }, { fixed }, { position }, { hiddenBreakpoint }, { hidden }, { zIndex }, $$restProps, { element }),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Navbar$1 = Navbar;
const useStyles$1 = createStyles((theme2, { height, borderPosition, fixed, position, zIndex }) => {
  return {
    root: {
      [`${theme2.dark} &`]: {
        backgroundColor: theme2.fn.themeColor("dark", 7),
        borderBottom: borderPosition === "bottom" ? `1px solid ${theme2.fn.themeColor("dark", 5)}` : void 0,
        borderTop: borderPosition === "top" ? `1px solid ${theme2.fn.themeColor("dark", 5)}` : void 0
      },
      ...position,
      zIndex,
      height,
      fontFamily: "$standard",
      maxHeight: height,
      position: fixed ? "fixed" : "static",
      boxSizing: "border-box",
      backgroundColor: "white",
      borderBottom: borderPosition === "bottom" ? `1px solid ${theme2.fn.themeColor("gray", 2)}` : void 0,
      borderTop: borderPosition === "top" ? `1px solid ${theme2.fn.themeColor("gray", 2)}` : void 0
    }
  };
});
const VerticalSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "height",
    "fixed",
    "position",
    "zIndex",
    "section"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, height = void 0, fixed = false, position = {}, zIndex = 100, section } = $$props;
  const injectStyles = globalCss({
    ":root": {
      [`--svelteui-${section}-height`]: `${height}px`
    }
  });
  injectStyles();
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx, classes, getStyles } = useStyles$1(
      {
        borderPosition: section === "header" ? "bottom" : "top",
        fixed,
        height,
        position,
        zIndex
      },
      { name: "VerticalSection" }
    ));
    $$rendered = `${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          root: section === "header" ? "nav" : "footer"
        },
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const VerticalSection$1 = VerticalSection;
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "height", "fixed", "position", "zIndex"]);
  let { use = [], element = void 0, class: className = "", override = {}, height = void 0, fixed = false, position = { top: 0, left: 0, right: 0 }, zIndex = 100 } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(VerticalSection$1, "VerticalSection").$$render(
      $$result,
      Object.assign({}, { section: "header" }, { class: className }, { use }, { override }, { height }, { fixed }, { position }, { zIndex }, $$restProps, { element }),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Header$1 = Header;
function getPositionStyles(props, theme2) {
  const padding = fns.size({ size: props.padding, sizes: theme2.spacing });
  const navbarOffset = props.navbarOffsetBreakpoint ? fns.size({ size: props.navbarOffsetBreakpoint, sizes: theme2.breakpoints }) : null;
  const asideOffset = props.asideOffsetBreakpoint ? fns.size({ size: props.asideOffsetBreakpoint, sizes: theme2.breakpoints }) : null;
  if (!props.fixed) {
    return { padding };
  }
  return {
    minHeight: "100vh",
    paddingTop: `calc(var(--svelteui-header-height, 0px) + ${padding}px)`,
    paddingBottom: `calc(var(--svelteui-footer-height, 0px) + ${padding}px)`,
    paddingLeft: `calc(var(--svelteui-navbar-width, 0px) + ${padding}px)`,
    paddingRight: `calc(var(--svelteui-aside-width, 0px) + ${padding}px)`,
    [`@media (max-width: ${navbarOffset}px)`]: {
      paddingLeft: padding
    },
    [`@media (max-width: ${asideOffset}px)`]: {
      paddingRight: padding
    }
  };
}
const useStyles = createStyles((_, props) => {
  return {
    root: {
      boxSizing: "border-box"
    },
    body: {
      display: "flex",
      boxSizing: "border-box"
    },
    main: {
      flex: 1,
      width: "100vw",
      boxSizing: "border-box",
      ...getPositionStyles(props, theme)
    }
  };
});
const AppShellProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "value"]);
  let { use = [], element = void 0, class: className = "", override = {}, value } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign({}, { class: className }, { css: { ...override } }, { use }, $$restProps, { element }),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const AppShellProvider$1 = AppShellProvider;
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, zIndex = 100, fixed = false, padding = "md", navbarOffsetBreakpoint = void 0, asideOffsetBreakpoint = void 0 } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.navbarOffsetBreakpoint === void 0 && $$bindings.navbarOffsetBreakpoint && navbarOffsetBreakpoint !== void 0)
    $$bindings.navbarOffsetBreakpoint(navbarOffsetBreakpoint);
  if ($$props.asideOffsetBreakpoint === void 0 && $$bindings.asideOffsetBreakpoint && asideOffsetBreakpoint !== void 0)
    $$bindings.asideOffsetBreakpoint(asideOffsetBreakpoint);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx, classes } = useStyles(
      {
        padding,
        fixed,
        navbarOffsetBreakpoint,
        asideOffsetBreakpoint
      },
      { override, name: "AppShell" }
    ));
    $$rendered = `${validate_component(AppShellProvider$1, "AppShellProvider").$$render(
      $$result,
      {
        use,
        value: { fixed, zIndex },
        class: cx(className, classes.root),
        element
      },
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Box, "Box").$$render($$result, {}, {}, {
            default: () => {
              return `${$$slots.header ? `${slots.header ? slots.header({}) : ``}` : ``}
		<div${add_attribute("class", classes.body, 0)}>${$$slots.navbar ? `${slots.navbar ? slots.navbar({}) : ``}` : ``}
			<main${add_attribute("class", classes.main, 0)}>${slots.default ? slots.default({}) : ``}</main>
			${$$slots.aside ? `${slots.aside ? slots.aside({}) : ``}` : ``}</div>
		${$$slots.footer ? `${slots.footer ? slots.footer({}) : ``}` : ``}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const AppShell$1 = AppShell;
const loader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Chorasmian&display=swap');body.svelte-1l7pb09{height:100vh;width:100vw;margin:0;padding:0;box-sizing:border-box}.text.svelte-1l7pb09{width:100%;position:absolute;top:20%;display:flex;justify-content:center;border:1px solid rgba(255, 255, 255, 0.212);border-radius:10px}h1.svelte-1l7pb09{font-family:'Noto Sans Chorasmian', sans-serif}.center.svelte-1l7pb09{height:100vh;display:flex;justify-content:center;align-items:center;background:#000}.wave.svelte-1l7pb09{width:5px;height:100px;background:linear-gradient(45deg, cyan, #fff);margin:10px;animation:svelte-1l7pb09-wave 1s linear infinite;border-radius:20px}.wave.svelte-1l7pb09:nth-child(2){animation-delay:0.1s}.wave.svelte-1l7pb09:nth-child(3){animation-delay:0.2s}.wave.svelte-1l7pb09:nth-child(4){animation-delay:0.3s}.wave.svelte-1l7pb09:nth-child(5){animation-delay:0.4s}.wave.svelte-1l7pb09:nth-child(6){animation-delay:0.5s}.wave.svelte-1l7pb09:nth-child(7){animation-delay:0.6s}.wave.svelte-1l7pb09:nth-child(8){animation-delay:0.7s}.wave.svelte-1l7pb09:nth-child(9){animation-delay:0.8s}.wave.svelte-1l7pb09:nth-child(10){animation-delay:0.9s}@keyframes svelte-1l7pb09-wave{0%{transform:scale(0)}50%{transform:scale(1)}100%{transform:scale(0)}}h1.svelte-1l7pb09{color:white}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<body class="svelte-1l7pb09"><div class="text svelte-1l7pb09"><h1 class="svelte-1l7pb09">loading your friend...</h1></div>

	<div class="center svelte-1l7pb09"><div class="wave svelte-1l7pb09"></div>
		<div class="wave svelte-1l7pb09"></div>
		<div class="wave svelte-1l7pb09"></div>
		<div class="wave svelte-1l7pb09"></div>
		<div class="wave svelte-1l7pb09"></div>
		<div class="wave svelte-1l7pb09"></div>
		<div class="wave svelte-1l7pb09"></div>
		<div class="wave svelte-1l7pb09"></div>
		<div class="wave svelte-1l7pb09"></div>
		<div class="wave svelte-1l7pb09"></div></div>
</body>`;
});
const animate = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Chorasmian&display=swap');@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Chorasmian&family=Noto+Sans+Mono:wght@200;400;700&display=swap');@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');.svelte-15ygy08{padding:0px;margin:0px}.loadscreen.svelte-15ygy08{animation:fadeOut;animation-duration:6s}body.svelte-15ygy08{width:100%;height:100%}body.svelte-15ygy08{margin:0;padding:0;background:linear-gradient(\n			-45deg,\n			rgba(5, 151, 242, 0.3),\n			rgba(3, 88, 140, 0.3),\n			rgba(13, 13, 13, 0.3),\n			rgba(1, 40, 64, 0.3),\n			rgba(242, 242, 242, 0.3)\n		);background-size:400% 400%;animation:svelte-15ygy08-gradient 10s ease infinite;display:grid;grid-template-areas:'navbar' 'app';grid-template-rows:10vh 1fr}@keyframes svelte-15ygy08-gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.app.svelte-15ygy08{grid-area:'app'}h1.svelte-15ygy08{font-size:20px}.header.svelte-15ygy08{width:100vw;position:absolute;top:0;left:0;background-color:black}.header__text-box.svelte-15ygy08{background-color:#0d0d0d;border:2px solid black}.header__text.svelte-15ygy08{padding:20px 0px;font-size:30px;color:#f2f2f2;display:flex;justify-content:center;position:relative}.header__underline.svelte-15ygy08{border-bottom:1px solid rgba(255, 255, 255, 0.282);position:relative;width:100vw;top:-18px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loadpage = false;
  dataLoaded.subscribe((val) => loadpage = val);
  chatMessage.subscribe((x) => x ? "" : dataLoaded.update((state) => true));
  let waitload = false;
  setTimeout(
    function() {
      waitload = true;
    },
    2e3
  );
  $$result.css.add(css);
  return `<body class="svelte-15ygy08">${!waitload && loadpage ? `<div class="loadscreen animate__animated animate__fadeOut svelte-15ygy08">${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}</div>` : `${validate_component(AppShell$1, "AppShell").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Navbar$1, "Navbar").$$render($$result, { class: "navbar" }, {}, {
        default: () => {
          return `<div class="header svelte-15ygy08">${validate_component(Header$1, "Header").$$render($$result, { height: "8vh", slot: "header" }, {}, {
            default: () => {
              return `<div class="header__text-box svelte-15ygy08"><h1 class="header__text svelte-15ygy08">Temp友</h1>
							<div class="header__underline svelte-15ygy08"></div></div>`;
            }
          })}</div>`;
        }
      })}
			<div class="app svelte-15ygy08">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}`}
</body>`;
});
export {
  Layout as default
};
