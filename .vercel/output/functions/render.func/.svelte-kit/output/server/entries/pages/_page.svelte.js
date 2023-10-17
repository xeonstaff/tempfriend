import { c as create_ssr_component, b as add_attribute, a as compute_rest_props, h as get_current_component, v as validate_component, m as missing_component, o as onDestroy, i as spread, j as escape_attribute_value, k as escape_object, d as compute_slots, f as escape, l as is_void, n as each } from "../../chunks/index2.js";
import { f as fns, t as theme, b as createEventForwarder, u as useActions, c as createStyles, B as Box, k as keyframes, e as friendProfile, h as temperature, a as chatMessage, d as dataLoaded } from "../../chunks/stores.js";
import "isomorphic-fetch";
import "process";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { observable = false } = $$props;
  let { component } = $$props;
  let { code } = $$props;
  if ($$props.observable === void 0 && $$bindings.observable && observable !== void 0)
    $$bindings.observable(observable);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  return `${observable ? `<!-- HTML_TAG_START -->${exception(component, code)}<!-- HTML_TAG_END -->` : ``}`;
});
const Error$1 = Error;
const isBrowser = () => typeof window !== "undefined";
const browser = isBrowser();
const minifiedCss = ".modal-header{padding: 2px 16px;background-color: #339af0;color: white;}.modal-body{padding: 2px 16px;}.modal-footer{padding: 2px 16px;background-color: #339af0;color: white;}.modal-content{position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name: animateTop;animation-duration: 0.4s;}@keyframes animateTop {from {top: -300px; opacity: 0}to {top: 0; opacity: 1}}";
const style = browser ? document.createElement("style") : void 0;
if (browser) {
  const s = style;
  s.textContent = minifiedCss;
  s.id = "svelteui-inject";
}
function UserException(component, message, solution) {
  if (browser)
    document.head.appendChild(style);
  const html = `
    <div class="modal-content">
        <div class="modal-header">
            <h2>[${component} Component Error]:</h2>
            <h3>${message}</h3>
        </div>
        <div class="modal-body">
            <pre>
                ${solution ? solution : ""}
            </pre>
        </div>
        <div class="modal-footer">
            <h3>Fix the code to dismiss this error.</h3>
        </div>
    </div>        
    `;
  return html;
}
function exception(component, code) {
  const { message, solution } = code;
  if (solution) {
    return UserException(component, message, solution);
  }
  return UserException(component, message);
}
const vFunc = (color, gradient) => {
  const { themeColor, rgba } = fns;
  const variants = {
    /** Filled variant */
    filled: {
      darkMode: {
        backgroundColor: themeColor(color, 8)
      },
      border: "transparent",
      backgroundColor: themeColor(color, 6),
      color: "White",
      "&:hover": { backgroundColor: themeColor(color, 7) }
    },
    /** Light variant */
    light: {
      darkMode: {
        backgroundColor: rgba(themeColor(color, 8), 0.35),
        color: color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        "&:hover": { backgroundColor: rgba(themeColor(color, 7), 0.45) }
      },
      border: "transparent",
      backgroundColor: themeColor(color, 0),
      color: color === "dark" ? themeColor("dark", 9) : themeColor(color, 6),
      "&:hover": { backgroundColor: themeColor(color, 1) }
    },
    /** Outline variant */
    outline: {
      darkMode: {
        border: `1px solid ${themeColor(color, 4)}`,
        color: `${themeColor(color, 4)}`,
        "&:hover": { backgroundColor: rgba(themeColor(color, 4), 0.05) }
      },
      border: `1px solid ${themeColor(color, 7)}`,
      backgroundColor: "transparent",
      color: themeColor(color, 7),
      "&:hover": {
        backgroundColor: rgba(themeColor(color, 0), 0.35)
      }
    },
    /** Subtle variant */
    subtle: {
      darkMode: {
        color: color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        "&:hover": { backgroundColor: rgba(themeColor(color, 8), 0.35) }
      },
      border: "transparent",
      backgroundColor: "transparent",
      color: color === "dark" ? themeColor("dark", 9) : themeColor(color, 6),
      "&:hover": {
        backgroundColor: themeColor(color, 0)
      }
    },
    /** Default variant */
    default: {
      darkMode: {
        border: `1px solid ${themeColor("dark", 5)}`,
        backgroundColor: themeColor("dark", 5),
        color: "White",
        "&:hover": { backgroundColor: themeColor("dark", 4) }
      },
      border: `1px solid ${themeColor("gray", 4)}`,
      backgroundColor: "White",
      color: "Black",
      "&:hover": { backgroundColor: themeColor("gray", 0) }
    },
    /** White variant */
    white: {
      border: "transparent",
      backgroundColor: "White",
      color: themeColor(color, 7),
      "&:hover": { backgroundColor: "White" }
    },
    gradient: {}
  };
  if (gradient) {
    variants.gradient = {
      border: "transparent",
      background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
      color: "White"
    };
  }
  return variants;
};
function randomID(prefix = "svelteui") {
  return `${prefix}-${Math.random().toString(36).substring(2, 10)}`;
}
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("width", `${size}px`, 0)}${add_attribute("height", `${size}px`, 0)} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"${add_attribute("stroke", color, 0)}${add_attribute("class", className, 0)}><g fill="none" fill-rule="evenodd"><g transform="translate(2.5 2.5)" stroke-width="5"><circle stroke-opacity=".5" cx="16" cy="16" r="16"></circle><path d="M32 16c0-9.94-8.06-16-16-16"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg>`;
});
const Circle$1 = Circle;
const Bars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg"${add_attribute("fill", color, 0)}${add_attribute("width", `${size}px`, 0)}${add_attribute("class", className, 0)}><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect></svg>`;
});
const Bars$1 = Bars;
const Dots = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("width", `${size}px`, 0)}${add_attribute("height", `${Number(size) / 4}px`, 0)} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"${add_attribute("fill", color, 0)}${add_attribute("class", className, 0)}><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle></svg>`;
});
const Dots$1 = Dots;
const LOADER_SIZES = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58
};
const getCorrectShade = (color, dark = false) => {
  return theme.colors[dark ? `${color}400` : `${color}600`].value;
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "size", "color", "variant"]);
  let { use = [], element = void 0, class: className = "", size = "md", color = "blue", variant = "circle" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const LOADERS = { bars: Bars$1, circle: Circle$1, dots: Dots$1 };
  const defaultLoader = variant in LOADERS ? variant : "circle";
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `
${validate_component(LOADERS[defaultLoader] || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          color: color === "white" ? "white" : getCorrectShade(color)
        },
        { size: LOADER_SIZES[size] },
        { class: className },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Loader$1 = Loader;
const useStyles$9 = createStyles((theme2, { iconSize }) => {
  return {
    root: {
      focusRing: "auto",
      position: "relative",
      appearance: "none",
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "transparent",
      boxSizing: "border-box",
      height: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      minHeight: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      width: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      minWidth: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      padding: 0,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      textDecoration: "none"
    },
    icon: {
      height: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      minHeight: `${theme2.fn.size({ size: iconSize, sizes: theme2.space })}px`,
      position: "static",
      margin: 0,
      ml: 0,
      mr: 0,
      mt: 0,
      mb: 0
    }
  };
});
const IconRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let getStyles;
  let classes;
  let { className = "", override = {}, icon = void 0, iconSize = 16, iconProps = {} } = $$props;
  const requiresShim = typeof HTMLElement === "undefined" && typeof SVGElement === "undefined";
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
    $$bindings.iconSize(iconSize);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  ({ cx, getStyles, classes } = useStyles$9({ iconSize }, { name: "IconRenderer" }));
  {
    if (!requiresShim && (icon instanceof HTMLElement || icon instanceof SVGElement)) {
      icon.classList.add(...classes.icon.split(" "));
    }
  }
  return `${typeof icon === "function" ? `${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cx(className, classes.root, getStyles({ css: override }))
      },
      iconProps
    ),
    {},
    {}
  )}` : `${!requiresShim ? `${icon instanceof HTMLElement || icon instanceof SVGElement ? `<span${add_attribute("class", cx(className, classes.root, getStyles({ css: override })), 0)}><!-- HTML_TAG_START -->${icon.outerHTML}<!-- HTML_TAG_END --></span>` : ``}` : ``}`}`;
});
const IconRenderer$1 = IconRenderer;
function getTextColor(theme2, color, variant, gradient, dark = false) {
  if (color === "dimmed")
    return dark ? theme2.fn.themeColor("dark", 2) : theme2.fn.themeColor("gray", 6);
  if (variant === "gradient" || gradient)
    return theme2.fn.themeColor(color, 6);
  if (variant === "link")
    return dark ? theme2.fn.themeColor("blue", 4) : theme2.fn.themeColor("blue", 7);
  if (variant === "text")
    return dark ? theme2.fn.themeColor(color, 5) : theme2.fn.themeColor(color, 7);
}
const useStyles$8 = createStyles((theme2, { align, color, inherit, inline, lineClamp, size, tracking, transform, underline, weight, gradient, variant }) => {
  return {
    root: {
      focusRing: "auto",
      [`${theme2.dark} &`]: {
        color: color === "dark" ? "$dark50" : getTextColor(theme2, color, variant, gradient, true)
      },
      fontFamily: inherit ? "inherit" : "$standard",
      fontSize: inherit ? "inherit" : typeof size === "string" ? `$${size}` : `${size}px`,
      fontWeight: inherit ? "inherit" : `$${weight}`,
      letterSpacing: theme2.letterSpacings[tracking]?.value,
      lineHeight: inherit ? "inherit" : inline ? 1 : typeof size === "string" ? `$${size}` : `${size}px`,
      textTransform: transform,
      textDecoration: underline ? "underline" : "none",
      textAlign: align,
      cursor: variant === "link" ? "pointer" : "inherit",
      color: color === "green" ? "Black" : getTextColor(theme2, color, variant, gradient),
      backgroundImage: variant === "gradient" ? `linear-gradient(${gradient?.deg}deg, $${gradient?.from}600 0%, $${gradient?.to}600 100%)` : null,
      WebkitBackgroundClip: variant === "gradient" ? "text" : null,
      WebkitTextFillColor: variant === "gradient" ? "transparent" : null,
      ...lineClamp !== void 0 ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical"
      } : {},
      "&:hover": variant === "link" && underline === true ? {
        textDecoration: "underline"
      } : void 0
    }
  };
});
const TextErrors = Object.freeze([
  {
    error: true,
    message: "If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",
    solution: `
                If your component looks like this:

                &lt;Text gradient={{from: 'blue', to: 'red', deg: 45}}&gt;Text string &lt;/Text&gt;
                                                                    ^^^ - Try adding prop variant='gradient'
                `
  },
  {
    error: true,
    message: "If using the 'link' variant, an href needs to be set and the root must be an anchor",
    solution: `
                If your component looks like this:

                &lt;Text variant='link'&gt;Text string &lt;/Text&gt;
                                    ^^^ - Try adding props href && root={'a'}'
                `
  }
]);
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "align",
    "color",
    "root",
    "transform",
    "variant",
    "size",
    "weight",
    "gradient",
    "inline",
    "lineClamp",
    "underline",
    "inherit",
    "href",
    "tracking"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, align = "left", color = "dark", root = void 0, transform = "none", variant = "text", size = "md", weight = "normal", gradient = { from: "indigo", to: "cyan", deg: 45 }, inline = true, lineClamp = void 0, underline = false, inherit = false, href = "", tracking = "normal" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  let observable = false;
  let err;
  if (gradient.from === "indigo" && gradient.to === "cyan0" && gradient.deg === 45 && variant !== "gradient") {
    observable = true;
    err = TextErrors[0];
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.lineClamp === void 0 && $$bindings.lineClamp && lineClamp !== void 0)
    $$bindings.lineClamp(lineClamp);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.inherit === void 0 && $$bindings.inherit && inherit !== void 0)
    $$bindings.inherit(inherit);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tracking === void 0 && $$bindings.tracking && tracking !== void 0)
    $$bindings.tracking(tracking);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx, classes, getStyles } = useStyles$8(
      {
        lineClamp,
        underline,
        inline,
        inherit,
        gradient,
        variant,
        align,
        color,
        transform,
        size,
        weight,
        tracking
      },
      { name: "Text" }
    ));
    $$rendered = `${validate_component(Error$1, "Error").$$render($$result, { observable, component: "Text", code: err }, {}, {})}



${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { root },
        { use: [forwardEvents, [useActions, use]] },
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        { href: href ?? void 0 },
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
const Text$1 = Text;
const sizes$1 = {
  xs: {
    height: 30,
    padding: "0px 14px"
  },
  sm: {
    height: 36,
    padding: "0px 18px"
  },
  md: {
    height: 42,
    padding: "0px 22px"
  },
  lg: {
    height: 50,
    padding: "0px 26px"
  },
  xl: {
    height: 60,
    padding: "0px 32px"
  },
  "compact-xs": {
    height: 22,
    padding: "0 7px"
  },
  "compact-sm": {
    height: 26,
    padding: "0 8px"
  },
  "compact-md": {
    height: 30,
    padding: "0 10px"
  },
  "compact-lg": {
    height: 34,
    padding: "0 12px"
  },
  "compact-xl": {
    height: 40,
    padding: "0 14px"
  }
};
const useStyles$7 = createStyles((theme2, { color, compact, fullSize, gradient, radius, size, variant }) => {
  return {
    root: {
      focusRing: "auto",
      cursor: "pointer",
      position: "relative",
      boxSizing: "border-box",
      textDecoration: "none",
      outline: "none",
      userSelect: "none",
      appearance: "none",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: null,
      borderRadius: typeof radius === "number" ? radius : `$${radius}`,
      height: typeof size === "number" ? `${size}px` : sizes$1[compact ? `compact-${size}` : size].height,
      padding: typeof size === "number" ? `0px ${size}px` : sizes$1[compact ? `compact-${size}` : size].padding,
      fontFamily: "$standard",
      fontWeight: "$semibold",
      fontSize: `$${size}`,
      lineHeight: 1,
      flexGrow: 0,
      width: fullSize ? "100%" : "auto",
      "&:hover": {
        backgroundColor: variant === "gradient" ? null : theme2.fn.themeColor(color, 7),
        backgroundSize: variant === "gradient" ? "200%" : null
      },
      "&:active": {
        transform: "translateY(1px)"
      }
    },
    loading: {
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: -1,
        backgroundColor: "rgba(255, 255, 255, .5)",
        borderRadius: `$${radius}`,
        cursor: "not-allowed"
      }
    },
    variants: {
      variation: vFunc(color, gradient)
    },
    disabled: {
      pointerEvents: "none",
      borderColor: "transparent",
      backgroundColor: theme2.fn.themeColor("gray", 2),
      color: theme2.fn.themeColor("gray", 5),
      cursor: "not-allowed",
      darkMode: {
        backgroundColor: theme2.fn.themeColor("dark", 4),
        color: theme2.fn.themeColor("dark", 6)
      }
    }
  };
});
const ButtonErrors = Object.freeze([
  {
    error: true,
    message: "If using the disabled prop, a loading cannot be set at the same time",
    solution: `
                If your component looks like this:
                
                &lt;Button disabled loading ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ ^^^^^^^ - Try removing one of these
                `
  },
  {
    error: true,
    message: "If using the external prop, a href prop must be associated with it. If you have an href prop there must be content inside.",
    solution: `
                If your component looks like this:
                
                &lt;Button external ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ - Try adding the href prop too
                `
  }
]);
const Ripple_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".ripple.svelte-3pkhve{display:block;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;border-radius:inherit;color:inherit;pointer-events:none;z-index:0;contain:strict}.ripple.svelte-3pkhve .animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;opacity:0;pointer-events:none;overflow:hidden;will-change:transform, opacity}.ripple.svelte-3pkhve .animation-enter{transition:none}.ripple.svelte-3pkhve .animation-in{transition:opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n			opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1)}.ripple.svelte-3pkhve .animation-out{transition:opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)}",
  map: null
};
const Ripple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { center = false } = $$props;
  let { circle = false } = $$props;
  let { color = "currentColor" } = $$props;
  let el;
  onDestroy(() => {
    {
      return;
    }
  });
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.circle === void 0 && $$bindings.circle && circle !== void 0)
    $$bindings.circle(circle);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$5);
  return `<div class="ripple svelte-3pkhve"${add_attribute("this", el, 0)}></div>`;
});
const Ripple$1 = Ripple;
const Button_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".uppercase.svelte-5xpm5q{text-transform:uppercase}.left-section.svelte-5xpm5q{margin-right:10px;display:flex;align-items:center;justify-content:center}.right-section.svelte-5xpm5q{margin-left:10px;display:flex;align-items:center;justify-content:center}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "variant",
    "color",
    "size",
    "radius",
    "gradient",
    "loaderPosition",
    "loaderProps",
    "href",
    "external",
    "disabled",
    "compact",
    "loading",
    "uppercase",
    "fullSize",
    "ripple"
  ]);
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, variant = "filled", color = "blue", size = "sm", radius = "sm", gradient = { from: "indigo", to: "cyan", deg: 45 }, loaderPosition = "left", loaderProps = {
    size: "xs",
    color: "white",
    variant: "circle"
  }, href = null, external = false, disabled = false, compact = false, loading = false, uppercase = false, fullSize = false, ripple = false } = $$props;
  createEventForwarder(get_current_component());
  let observable = false;
  let err;
  if (disabled && loading) {
    observable = true;
    err = ButtonErrors[0];
  }
  if (external && typeof href !== "string" || href?.length < 1) {
    observable = true;
    err = ButtonErrors[1];
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.loaderPosition === void 0 && $$bindings.loaderPosition && loaderPosition !== void 0)
    $$bindings.loaderPosition(loaderPosition);
  if ($$props.loaderProps === void 0 && $$bindings.loaderProps && loaderProps !== void 0)
    $$bindings.loaderProps(loaderProps);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0)
    $$bindings.compact(compact);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0)
    $$bindings.uppercase(uppercase);
  if ($$props.fullSize === void 0 && $$bindings.fullSize && fullSize !== void 0)
    $$bindings.fullSize(fullSize);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  $$result.css.add(css$4);
  {
    if (observable)
      override = { display: "none" };
  }
  ({ cx, classes, getStyles } = useStyles$7(
    {
      color,
      compact,
      fullSize,
      gradient,
      radius,
      size,
      variant
    },
    { name: "Button" }
  ));
  return `${validate_component(Error$1, "Error").$$render(
    $$result,
    {
      observable,
      component: "Button",
      code: err
    },
    {},
    {}
  )}



${href && !disabled ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(cx(className, classes.root, getStyles({ css: override, variation: variant }), { disabled, loading }))
      },
      { role: "button" },
      { rel: "noreferrer noopener" },
      {
        target: escape_attribute_value(external ? "_blank" : "_self")
      },
      escape_object($$restProps),
      { tabindex: "0" }
    ],
    {
      classes: (compact ? "compact" : "") + " " + (uppercase ? "uppercase" : "") + " svelte-5xpm5q"
    }
  )}${add_attribute("this", element, 0)}>${loading && loaderPosition === "left" ? `<span class="left-section svelte-5xpm5q">${validate_component(Loader$1, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.leftIcon ? `<span class="left-section svelte-5xpm5q">${slots.leftIcon ? slots.leftIcon({}) : `X`}</span>` : ``}`}
		${slots.default ? slots.default({}) : `Button`}
		${ripple ? `${validate_component(Ripple$1, "Ripple").$$render($$result, { center: false, circle: false }, {}, {})}` : ``}
		${loading && loaderPosition === "right" ? `<span class="right-section svelte-5xpm5q">${validate_component(Loader$1, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.rightIcon ? `<span class="right-section svelte-5xpm5q">${slots.rightIcon ? slots.rightIcon({}) : `X`}</span>` : ``}`}</a>` : `<button${spread(
    [
      {
        class: escape_attribute_value(cx(className, classes.root, getStyles({ css: override, variation: variant }), {
          [classes.disabled]: disabled,
          [classes.loading]: loading
        }))
      },
      { disabled: disabled || null },
      escape_object($$restProps),
      { tabindex: "0" }
    ],
    {
      classes: (compact ? "compact" : "") + " " + (uppercase ? "uppercase" : "") + " svelte-5xpm5q"
    }
  )}${add_attribute("this", element, 0)}>${loading && loaderPosition === "left" ? `<span class="left-section svelte-5xpm5q">${validate_component(Loader$1, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.leftIcon ? `<span class="left-section svelte-5xpm5q">${slots.leftIcon ? slots.leftIcon({}) : `X`}</span>` : ``}`}
		${slots.default ? slots.default({}) : `Button`}
		${ripple ? `${validate_component(Ripple$1, "Ripple").$$render($$result, { center: false, circle: false }, {}, {})}` : ``}
		${loading && loaderPosition === "right" ? `<span class="right-section svelte-5xpm5q">${validate_component(Loader$1, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.rightIcon ? `<span class="right-section svelte-5xpm5q">${slots.rightIcon ? slots.rightIcon({}) : `X`}</span>` : ``}`}</button>`}`;
});
const Button$1 = Button;
const useStyles$6 = createStyles((theme2) => {
  return {
    root: {
      [`${theme2.dark} &`]: {
        backgroundColor: theme2.fn.themeColor("dark", 6)
      },
      position: "relative",
      overflow: "hidden",
      backgroundColor: "white"
    }
  };
});
const useStyles$5 = createStyles((theme2, { radius, shadow, withBorder, padding }) => {
  return {
    root: {
      [`${theme2.dark} &`]: {
        bc: theme2.colors["dark700"].value,
        color: theme2.colors["dark50"].value,
        border: withBorder ? `1px solid ${theme2.colors["dark600"].value}` : void 0
      },
      padding: theme2.fn.size({ size: padding, sizes: theme2.space }),
      outline: 0,
      display: "block",
      textDecoration: "none",
      color: "black",
      backgroundColor: "white",
      boxSizing: "border-box",
      borderRadius: `$${radius}`,
      WebkitTapHighlightColor: "transparent",
      boxShadow: theme2.shadows[shadow].value || shadow || "none",
      border: withBorder ? `1px solid ${theme2.colors["gray200"].value}` : void 0
    }
  };
});
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "shadow", "radius", "withBorder", "padding"]);
  let { use = [], element = void 0, class: className = "", override = {}, shadow = "xs", radius = "sm", withBorder = false, padding = "md" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.withBorder === void 0 && $$bindings.withBorder && withBorder !== void 0)
    $$bindings.withBorder(withBorder);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx, classes, getStyles } = useStyles$5({ radius, shadow, withBorder, padding }, { name: "Paper" }));
    $$rendered = `${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        { use },
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
const Paper$1 = Paper;
const Card$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let theme2;
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "padding"]);
  let { use = [], element = void 0, class: className = "", override = {}, padding = "md" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx, classes, getStyles, theme: theme2 } = useStyles$6(null, { name: "Card" }));
    $$rendered = `${validate_component(Paper$1, "Paper").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        { padding },
        { use },
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
const _Card = Card$1;
const useStyles$4 = createStyles((theme2, { padding }) => {
  return {
    root: {
      display: "block",
      marginLeft: -1 * theme2.fn.size({ size: padding, sizes: theme2.space }),
      marginRight: -1 * theme2.fn.size({ size: padding, sizes: theme2.space })
    }
  };
});
const CardSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "padding"]);
  let { use = [], element = void 0, class: className = "", override = {}, padding = "md" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx, classes, getStyles } = useStyles$4({ padding }));
    $$rendered = `${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { id: "svelteui_card_section" },
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        { use },
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
const Section = CardSection;
_Card.Section = Section;
const Card = _Card;
const useStyles$3 = createStyles((theme2, { size }) => {
  return {
    root: {
      lineHeight: theme2.lineHeights.md.value
    },
    label: {
      [`${theme2.dark} &`]: {
        color: theme2.fn.themeColor("dark", 0)
      },
      display: "inline-block",
      marginBottom: 4,
      fontSize: theme2.fontSizes[size].value,
      fontWeight: 500,
      color: theme2.fn.themeColor("gray", 9),
      wordBreak: "break-word",
      cursor: "default",
      WebkitTapHighlightColor: "transparent"
    },
    error: {
      [`${theme2.dark} &`]: {
        color: theme2.fn.themeColor("red", 6)
      },
      marginTop: 5,
      wordBreak: "break-word",
      color: theme2.fn.themeColor("red", 7)
    },
    description: {
      [`${theme2.dark} &`]: {
        color: `${theme2.fn.themeColor("dark", 2)} !important`
      },
      marginTop: -3,
      marginBottom: 7,
      wordBreak: "break-word",
      color: `${theme2.fn.themeColor("gray", 6)} !important`,
      fontSize: theme2.fontSizes[size].value,
      lineHeight: 1.2
    },
    required: {
      [`${theme2.dark} &`]: {
        color: "$red500"
      },
      color: theme2.fn.themeColor("red", 7)
    }
  };
});
const LabelElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "label" } = $$props;
  let { label = "label" } = $$props;
  let { labelElement = "label" } = $$props;
  let { required = false } = $$props;
  let { id = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelElement === void 0 && $$bindings.labelElement && labelElement !== void 0)
    $$bindings.labelElement(labelElement);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `${validate_component(Box, "Box").$$render(
    $$result,
    {
      for: id,
      root: labelElement,
      class: className
    },
    {},
    {
      default: () => {
        return `${escape(label)}
	${required ? `<span class="required" aria-hidden>${escape(" *")}</span>` : ``}`;
      }
    }
  )}`;
});
const LabelElement$1 = LabelElement;
const InputWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "label",
    "description",
    "error",
    "required",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "id",
    "labelElement",
    "size"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, label = "label", description = null, error = null, required = false, labelProps = {}, descriptionProps = {}, errorProps = {}, id = "input-id", labelElement = "label", size = "sm" } = $$props;
  let _labelProps;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.labelProps === void 0 && $$bindings.labelProps && labelProps !== void 0)
    $$bindings.labelProps(labelProps);
  if ($$props.descriptionProps === void 0 && $$bindings.descriptionProps && descriptionProps !== void 0)
    $$bindings.descriptionProps(descriptionProps);
  if ($$props.errorProps === void 0 && $$bindings.errorProps && errorProps !== void 0)
    $$bindings.errorProps(errorProps);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.labelElement === void 0 && $$bindings.labelElement && labelElement !== void 0)
    $$bindings.labelElement(labelElement);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        _labelProps = labelElement === "label" ? { htmlFor: id, ...labelProps } : { ...labelProps };
      }
    }
    ({ cx, classes, getStyles } = useStyles$3({ size }, { name: "InputWrapper" }));
    $$rendered = `${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
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
          return `${label ? `${validate_component(LabelElement$1, "LabelElement").$$render($$result, Object.assign({}, { class: classes.label }, _labelProps, { label }, { id }, { labelElement }, { required }), {}, {})}` : ``}
	${description ? `${validate_component(Text$1, "Text").$$render($$result, Object.assign({}, descriptionProps, { color: "gray" }, { class: classes.description }), {}, {
            default: () => {
              return `${escape(description)}`;
            }
          })}` : ``}
	${slots.default ? slots.default({}) : ``}
	${typeof error !== "boolean" && error ? `${validate_component(Text$1, "Text").$$render($$result, Object.assign({}, errorProps, { size }, { class: classes.error }), {}, {
            default: () => {
              return `${escape(error)}`;
            }
          })}` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const InputWrapper$1 = InputWrapper;
const fade = keyframes({
  "from, to": { opacity: 0.4 },
  "50%": { opacity: 1 }
});
const useStyles$2 = createStyles((theme2, { animate, circle, height, radius, width }) => {
  return {
    root: {
      [`${theme2.dark} &`]: {
        "&.visible": {
          "&::before": {
            background: theme2.fn.themeColor("dark", 7)
          },
          "&::after": {
            background: theme2.fn.themeColor("dark", 4)
          }
        }
      },
      height,
      width: circle ? height : `${width}%`,
      borderRadius: circle ? height : `$${radius}`,
      position: "relative",
      overflow: "hidden",
      "&.visible": {
        "&::before": {
          content: '""',
          position: "absolute",
          background: "white",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10
        },
        "&::after": {
          content: '""',
          position: "absolute",
          background: theme2.fn.themeColor("gray", 3),
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          animation: animate ? `${fade} 1500ms linear infinite` : "none",
          zIndex: 11
        }
      }
    }
  };
});
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "visible",
    "height",
    "width",
    "circle",
    "radius",
    "animate"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, visible = true, height = "auto", width = 100, circle = null, radius = null, animate = true } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.circle === void 0 && $$bindings.circle && circle !== void 0)
    $$bindings.circle(circle);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx, classes, getStyles } = useStyles$2({ animate, circle, height, radius, width }, { name: "Skeleton" }));
    $$rendered = `${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cx(className, classes.root, { visible }, getStyles({ css: override }))
        },
        { use },
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
const Skeleton$1 = Skeleton;
const useStyles$1 = createStyles((theme2, { radius, height, width, fit }) => {
  return {
    root: {},
    imageWrapper: {
      position: "relative"
    },
    figure: {
      margin: 0
    },
    image: {
      width,
      height,
      fontFamily: "$standard",
      display: "block",
      border: 0,
      borderRadius: theme2.fn.radius(radius),
      objectFit: fit
    },
    caption: {
      [`${theme2.dark} &`]: {
        color: theme2.fn.themeColor("dark", 2)
      },
      color: theme2.fn.themeColor("gray", 7),
      marginTop: theme2.space.xsPX.value
    },
    placeholder: {
      [`${theme2.dark} &`]: {
        color: theme2.fn.themeColor("dark", 2),
        backgroundColor: theme2.fn.themeColor("dark", 8)
      },
      width,
      height,
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme2.fn.themeColor("gray", 6),
      backgroundColor: theme2.fn.themeColor("gray", 0),
      borderRadius: theme2.fn.radius(radius)
    }
  };
});
const ImageIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style: style2 = {} } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style2 !== void 0)
    $$bindings.style(style2);
  return `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="${"width: " + escape(style2.width, true) + "; height: " + escape(style2.height, true) + ";"}"><path d="M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
});
const ImageIcon$1 = ImageIcon;
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "override",
    "radius",
    "class",
    "src",
    "alt",
    "fit",
    "width",
    "height",
    "caption",
    "usePlaceholder",
    "loader"
  ]);
  let { use = [], element = void 0, override = {}, radius = 0, class: className = "", src = void 0, alt = "", fit = "cover", width = "100%", height = "auto", caption = void 0, usePlaceholder = false, loader = false } = $$props;
  createEventForwarder(get_current_component());
  let loaded = false;
  let showPlaceholder = false;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fit === void 0 && $$bindings.fit && fit !== void 0)
    $$bindings.fit(fit);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.usePlaceholder === void 0 && $$bindings.usePlaceholder && usePlaceholder !== void 0)
    $$bindings.usePlaceholder(usePlaceholder);
  if ($$props.loader === void 0 && $$bindings.loader && loader !== void 0)
    $$bindings.loader(loader);
  showPlaceholder = usePlaceholder && !loaded;
  ({ cx, classes, getStyles } = useStyles$1({ radius, fit, height, width }, { name: "Image" }));
  return `

${validate_component(Box, "Box").$$render(
    $$result,
    {
      class: cx(className, classes.root, getStyles({ css: override }))
    },
    {},
    {
      default: () => {
        return `<figure${add_attribute("class", classes.figure, 0)}><div${add_attribute("class", classes.imageWrapper, 0)}>${validate_component(Skeleton$1, "Skeleton").$$render($$result, { visible: loader ? loaded : false }, {}, {
          default: () => {
            return `<img${spread(
              [
                {
                  class: escape_attribute_value(classes.image)
                },
                { src: escape_attribute_value(src) },
                { alt: escape_attribute_value(alt) },
                escape_object($$restProps)
              ],
              {}
            )}${add_attribute("this", element, 0)}>`;
          }
        })}
			${showPlaceholder ? `<div${add_attribute("class", classes.placeholder, 0)}${add_attribute("title", alt, 0)}>${slots.placeholder ? slots.placeholder({}) : `
						${validate_component(ImageIcon$1, "ImageIcon").$$render($$result, { style: { width: 40, height: 40 } }, {}, {})}
					`}</div>` : ``}</div>
		${caption ? `${validate_component(Text$1, "Text").$$render(
          $$result,
          {
            class: classes.caption,
            root: "figcaption",
            size: "sm",
            align: "center"
          },
          {},
          {
            default: () => {
              return `${escape(caption)}`;
            }
          }
        )}` : ``}</figure>`;
      }
    }
  )}`;
});
const Image$1 = Image;
const sizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60
};
const useStyles = createStyles((theme2, { icon, iconWidth, invalid, multiline, radius, rightSectionWidth, size, variant, showRightSection }) => {
  return {
    root: {
      darkMode: {
        "&:disabled": {
          backgroundColor: theme2.fn.themeColor("dark", 6)
        },
        "&::placeholder": {
          color: theme2.fn.themeColor("dark", 3)
        }
      },
      position: "relative"
    },
    input: variant !== "headless" ? {
      height: multiline ? "auto" : typeof size === "number" ? `${size}px` : sizes[size] ?? sizes.md,
      WebkitTapHighlightColor: "transparent",
      lineHeight: multiline ? "$md" : `${sizes[size] - 2}px`,
      appearance: "none",
      resize: "none",
      boxSizing: "border-box",
      fontSize: typeof size === "number" ? `${size}px` : `${size}`,
      width: "100%",
      color: "Black",
      display: "block",
      textAlign: "left",
      minHeight: variant === "default" || variant === "filled" ? sizes[size] ?? sizes.md : null,
      paddingLeft: variant === "default" && icon || variant === "filled" && icon ? sizes[size] ?? sizes.md / 3 : 12,
      paddingRight: variant === "default" || variant === "filled" ? showRightSection ? rightSectionWidth : null : null,
      borderRadius: variant === "default" || variant === "filled" ? `$${radius}` : null,
      "&:disabled": {
        backgroundColor: theme2.fn.themeColor("gray", 1),
        color: theme2.fn.themeColor("dark", 2),
        opacity: 0.6,
        cursor: "not-allowed",
        "&::placeholder": {
          color: theme2.fn.themeColor("dark", 2)
        }
      },
      "&::placeholder": {
        opacity: 1,
        userSelect: "none",
        color: theme2.fn.themeColor("gray", 5)
      },
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
        appearance: "none"
      },
      "&[type=number]": {
        MozAppearance: "textfield"
      },
      darkMode: {
        color: theme2.fn.themeColor("dark", 0)
      }
    } : {},
    defaultVariant: {
      border: `1px solid ${theme2.fn.themeColor("gray", 4)}`,
      backgroundColor: "White",
      transition: "border-color 100ms ease",
      minHeight: sizes[size] ?? sizes.md,
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: theme2.fn.themeColor("blue", 5)
      },
      darkMode: {
        border: `1px solid ${theme2.fn.themeColor("dark", 5)}`,
        backgroundColor: theme2.fn.themeColor("dark", 8),
        "&:focus, &:focus-within": {
          borderColor: theme2.fn.themeColor("blue", 8)
        }
      }
    },
    filledVariant: {
      border: "1px solid transparent",
      backgroundColor: theme2.fn.themeColor("gray", 1),
      minHeight: sizes[size] ?? sizes.md,
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: `${theme2.fn.themeColor("blue", 5)} !important`
      },
      darkMode: {
        backgroundColor: theme2.fn.themeColor("dark", 5),
        "&:focus, &:focus-within": {
          borderColor: `${theme2.fn.themeColor("blue", 8)} !important`
        }
      }
    },
    unstyledVariant: {
      height: multiline ? void 0 : "auto",
      borderWidth: 0,
      color: "Black",
      backgroundColor: "transparent",
      minHeight: 28,
      outline: 0,
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: "transparent"
      },
      "&:disabled": {
        backgroundColor: "transparent",
        "&:focus, &:focus-within": {
          outline: "none",
          borderColor: "transparent"
        }
      }
    },
    withIcon: {
      paddingLeft: typeof iconWidth === "number" ? `${iconWidth}px` : sizes[size] ?? sizes.md
    },
    disabled: {
      backgroundColor: theme2.fn.themeColor("gray", 1),
      color: theme2.fn.themeColor("dark", 2),
      opacity: 0.6,
      cursor: "not-allowed",
      "&::placeholder": {
        color: theme2.fn.themeColor("dark", 2)
      },
      darkMode: {
        backgroundColor: theme2.fn.themeColor("dark", 6),
        borderColor: theme2.fn.themeColor("dark", 4)
      }
    },
    invalid: {
      color: theme2.fn.themeColor("red", 7),
      borderColor: theme2.fn.themeColor("red", 7),
      "&::placeholder": {
        opacity: 1,
        color: theme2.fn.themeColor("red", 7)
      },
      darkMode: {
        color: theme2.fn.themeColor("red", 6),
        borderColor: theme2.fn.themeColor("red", 6),
        "&::placeholder": {
          color: theme2.fn.themeColor("red", 6)
        }
      }
    },
    icon: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: 1,
      left: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: iconWidth ? `${iconWidth}px` : sizes[size] ?? sizes.md,
      color: invalid ? theme2.fn.themeColor("red", 7) : theme2.fn.themeColor("gray", 5),
      darkMode: {
        color: invalid ? theme2.fn.themeColor("red", 6) : theme2.fn.themeColor("dark", 2)
      }
    },
    rightSection: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: rightSectionWidth
    }
  };
});
function isInput(root) {
  return ["input", "select", "textarea", "datalist"].includes(root);
}
const Input$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "root",
    "icon",
    "iconWidth",
    "iconProps",
    "showRightSection",
    "rightSectionWidth",
    "rightSectionProps",
    "wrapperProps",
    "id",
    "required",
    "radius",
    "variant",
    "disabled",
    "size",
    "value",
    "invalid",
    "multiline",
    "autocomplete",
    "type",
    "placeholder",
    "autofocus"
  ]);
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, root = "input", icon = null, iconWidth = 36, iconProps = { size: 20, color: "currentColor" }, showRightSection = $$slots.rightSection, rightSectionWidth = 36, rightSectionProps = {}, wrapperProps = {}, id = "input-id", required = false, radius = "sm", variant = "default", disabled = false, size = "sm", value = "", invalid = false, multiline = false, autocomplete = "on", type = "text", placeholder = void 0, autofocus = void 0 } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  function castRoot() {
    return root;
  }
  let isHTMLElement = true;
  let isComponent = false;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconWidth === void 0 && $$bindings.iconWidth && iconWidth !== void 0)
    $$bindings.iconWidth(iconWidth);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.showRightSection === void 0 && $$bindings.showRightSection && showRightSection !== void 0)
    $$bindings.showRightSection(showRightSection);
  if ($$props.rightSectionWidth === void 0 && $$bindings.rightSectionWidth && rightSectionWidth !== void 0)
    $$bindings.rightSectionWidth(rightSectionWidth);
  if ($$props.rightSectionProps === void 0 && $$bindings.rightSectionProps && rightSectionProps !== void 0)
    $$bindings.rightSectionProps(rightSectionProps);
  if ($$props.wrapperProps === void 0 && $$bindings.wrapperProps && wrapperProps !== void 0)
    $$bindings.wrapperProps(wrapperProps);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.multiline === void 0 && $$bindings.multiline && multiline !== void 0)
    $$bindings.multiline(multiline);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        isHTMLElement = root && typeof root === "string";
        isComponent = root && typeof root === "function";
      }
    }
    ({ cx, classes, getStyles } = useStyles(
      {
        icon,
        iconWidth,
        invalid,
        multiline,
        radius,
        rightSectionWidth,
        showRightSection,
        size,
        variant
      },
      { name: "Input" }
    ));
    $$rendered = `


${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign(
        {},
        wrapperProps,
        {
          class: cx(classes.root, getStyles({ css: override }))
        },
        $$restProps
      ),
      {},
      {
        default: () => {
          return `${icon ? `<div${add_attribute("class", classes.icon, 0)}>${validate_component(IconRenderer$1, "IconRenderer").$$render($$result, Object.assign({}, { icon }, iconProps, { iconSize: 16 }), {}, {})}</div>` : ``}
	${isHTMLElement && root === "input" ? `<input${spread(
            [
              { value: escape_attribute_value(value) },
              { type: escape_attribute_value(type) },
              { required: required || null },
              { disabled: disabled || null },
              { id: escape_attribute_value(id) },
              {
                placeholder: escape_attribute_value(placeholder)
              },
              {
                autocomplete: escape_attribute_value(autocomplete)
              },
              { autofocus: autofocus || null },
              {
                "aria-invalid": escape_attribute_value(invalid)
              },
              {
                class: escape_attribute_value(cx(
                  className,
                  classes.input,
                  {
                    [classes.disabled]: disabled,
                    [classes.invalid]: invalid
                  },
                  classes[`${variant}Variant`] ?? {}
                ))
              },
              escape_object($$restProps)
            ],
            { classes: icon ? "withIcon" : "" }
          )}${add_attribute("this", element, 0)}>` : `${isHTMLElement && isInput(String(root)) ? `
		
		${((tag) => {
            return tag ? `<${castRoot()}${spread(
              [
                { value: escape_attribute_value(value) },
                { required: required || null },
                { disabled: disabled || null },
                { id: escape_attribute_value(id) },
                {
                  autocomplete: escape_attribute_value(autocomplete)
                },
                { type: escape_attribute_value(type) },
                { autofocus: autofocus || null },
                {
                  "aria-invalid": escape_attribute_value(invalid)
                },
                {
                  class: escape_attribute_value(cx(
                    className,
                    classes.input,
                    {
                      [classes.disabled]: disabled,
                      [classes.invalid]: invalid
                    },
                    classes[`${variant}Variant`] ?? {}
                  ))
                },
                escape_object($$restProps)
              ],
              {
                classes: (disabled ? "disabled" : "") + " " + (invalid ? "invalid" : "") + " " + (icon ? "withIcon" : "")
              }
            )}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(castRoot())}` : `${isComponent && typeof root !== "string" ? `${validate_component(root || missing_component, "svelte:component").$$render(
            $$result,
            Object.assign(
              {},
              { use: [forwardEvents, [useActions, use]] },
              { "aria-invalid": invalid },
              {
                class: cx(
                  className,
                  {
                    [classes.disabled]: disabled,
                    [classes.invalid]: invalid,
                    [classes.withIcon]: icon
                  },
                  classes[`${variant}Variant`] ?? {}
                )
              },
              { disabled },
              { required },
              { id },
              { type },
              { autofocus },
              $$restProps,
              { element },
              { value }
            ),
            {
              element: ($$value) => {
                element = $$value;
                $$settled = false;
              },
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${slots.default ? slots.default({}) : ``}`;
              }
            }
          )}` : ``}`}`}
	${showRightSection ? `<div${spread(
            [
              escape_object(rightSectionProps),
              {
                class: escape_attribute_value(classes.rightSection)
              }
            ],
            {}
          )}>${slots.rightSection ? slots.rightSection({}) : ``}</div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Input$2 = Input$1;
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _invalid;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "label",
    "description",
    "error",
    "required",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "invalid",
    "id",
    "labelElement",
    "size",
    "showRightSection",
    "value",
    "placeholder"
  ]);
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, label = "", description = null, error = null, required = false, labelProps = {}, descriptionProps = {}, errorProps = {}, invalid = false, id = "input-id", labelElement = "label", size = "sm", showRightSection = void 0, value = "", placeholder = "" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const baseId = randomID(id);
  const _showRightSection = showRightSection === void 0 ? !!$$slots.rightSection : showRightSection;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.labelProps === void 0 && $$bindings.labelProps && labelProps !== void 0)
    $$bindings.labelProps(labelProps);
  if ($$props.descriptionProps === void 0 && $$bindings.descriptionProps && descriptionProps !== void 0)
    $$bindings.descriptionProps(descriptionProps);
  if ($$props.errorProps === void 0 && $$bindings.errorProps && errorProps !== void 0)
    $$bindings.errorProps(errorProps);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.labelElement === void 0 && $$bindings.labelElement && labelElement !== void 0)
    $$bindings.labelElement(labelElement);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.showRightSection === void 0 && $$bindings.showRightSection && showRightSection !== void 0)
    $$bindings.showRightSection(showRightSection);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    _invalid = invalid || !!error;
    $$rendered = `

${validate_component(InputWrapper$1, "InputWrapper").$$render(
      $$result,
      {
        class: className,
        override,
        label,
        description,
        error,
        required,
        labelProps,
        descriptionProps,
        errorProps,
        id: baseId,
        labelElement,
        size,
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
          return `${validate_component(Input$2, "Input").$$render(
            $$result,
            Object.assign({}, { required }, { size }, { id: baseId }, { placeholder }, $$restProps, { use: [forwardEvents, [useActions, use]] }, { invalid: _invalid }, { showRightSection: _showRightSection }, { value }),
            {
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              }
            },
            {
              rightSection: () => {
                return `${slots.rightSection ? slots.rightSection({ slot: "rightSection" }) : ``}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const TextInput$1 = TextInput;
const faceCard_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".infobox.svelte-5u1dri{font-family:'Noto Sans Mono';font-weight:700}.card.svelte-5u1dri{border:1px solid rgba(0, 0, 0, 0.243);display:flex}.image.svelte-5u1dri{display:flex;align-items:center}h4.svelte-5u1dri{display:flex;justify-content:center;max-width:15vw;border:1px solid rgba(0, 0, 0, 0.243);border-radius:10px}@media(min-width: 1025px){main.svelte-5u1dri{width:50vw}.image.svelte-5u1dri{width:250px;padding-left:20px}.card.svelte-5u1dri{height:57vh;display:flex}.text.svelte-5u1dri{padding-left:50px}.infobox.svelte-5u1dri{font-size:16px;max-width:15vw;padding-left:20px}h4.svelte-5u1dri{padding:2px;position:relative;left:20px;margin-bottom:10px}}@media(min-width: 801px) and (max-width: 1024px){.card.svelte-5u1dri{height:52vh}.image.svelte-5u1dri{width:220px;padding-left:20px;align-items:center}.text.svelte-5u1dri{display:flex;align-items:top;padding-left:50px}.infobox.svelte-5u1dri{align-items:center;font-size:14px;width:200px;padding-left:20px;max-width:15vw}h4.svelte-5u1dri{font-size:12px;padding:5px;margin:10px}}@media(max-width: 800px){.card.svelte-5u1dri{width:100%;display:grid;grid-template-areas:'picta text';grid-template-columns:1.5fr 2fr;max-height:30vh}.image.svelte-5u1dri{grid-area:picta;width:40vw;display:flex}.text.svelte-5u1dri{grid-area:text;height:100%;width:100%;position:absolute;left:55%}.infobox.svelte-5u1dri{font-size:60%;max-width:30vw;padding-left:10px}h4.svelte-5u1dri{font-size:60%;max-width:30vw;padding:2px;margin:7px}}",
  map: null
};
const FaceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let profile = {};
  friendProfile.subscribe((newprofile) => {
    profile = newprofile;
  });
  let picheight = 350;
  $$result.css.add(css$3);
  return `<main class="svelte-5u1dri">${validate_component(Card, "Card").$$render($$result, { shadow: "md", padding: "sm" }, {}, {
    default: () => {
      return `<div class="card svelte-5u1dri">${validate_component(Card.Section, "Card.Section").$$render($$result, { padding: "sm" }, {}, {
        default: () => {
          return `<div class="image svelte-5u1dri" style="${"height: " + escape(picheight, true)}">
					
					${validate_component(Image$1, "Image").$$render(
            $$result,
            {
              id: "facePic",
              src: `${profile.picture}`,
              height: picheight,
              alt: "my very real friend",
              radius: 5,
              color: "black"
            },
            {},
            {}
          )}</div>`;
        }
      })}

			${validate_component(Card.Section, "Card.Section").$$render($$result, { padding: "sm" }, {}, {
        default: () => {
          return `<div class="text svelte-5u1dri">${validate_component(Text$1, "Text").$$render($$result, { size: "lg" }, {}, {
            default: () => {
              return `<h4 class="svelte-5u1dri">Name</h4>
						<div class="infobox svelte-5u1dri">${escape(profile.friendname)}</div>
						<h4 class="svelte-5u1dri">Age</h4>
						<div class="infobox svelte-5u1dri">${escape(profile.age)}</div>
						<h4 class="svelte-5u1dri">From</h4>
						<div class="infobox svelte-5u1dri">${escape(profile.location)}</div>
						<h4 class="svelte-5u1dri">Profession</h4>
						<div class="infobox svelte-5u1dri">${escape(profile.profession)}</div>`;
            }
          })}</div>`;
        }
      })}</div>`;
    }
  })}
</main>`;
});
temperature.subscribe((x) => {
});
chatMessage.subscribe((storedhistory) => storedhistory);
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dataLoaded.subscribe((val) => val);
  let nombre = "";
  friendProfile.subscribe((val) => nombre = val.friendname);
  let value = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<body><form id="chatform" action="">${validate_component(TextInput$1, "TextInput").$$render(
      $$result,
      {
        id: "textInput",
        class: "textinput",
        placeholder: "talk to " + nombre.split(" ")[0],
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(Button$1, "Button").$$render(
      $$result,
      {
        id: "button",
        variant: "default",
        color: "gray",
        size: "md"
      },
      {},
      {
        default: () => {
          return `Send`;
        }
      }
    )}</form>
</body>`;
  } while (!$$settled);
  return $$rendered;
});
const chatMessages_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "main.svelte-117zipp{background:rgba(255, 255, 255, 0.6);border:1px dashed rgba(205, 205, 205, 0.477);font-family:'Noto Sans Mono';overflow:auto}@media(min-width: 1025px){main.svelte-117zipp{width:48vw;height:60vh;max-height:100vh}}@media(min-width: 801px) and (max-width: 1024px){main.svelte-117zipp{width:48vw;height:55vh;max-height:100vh}}@media(max-width: 800px){main.svelte-117zipp{width:100%;height:41vh}}.even.svelte-117zipp{display:flex;justify-content:right;background-color:rgb(0, 0, 255, 0.05);border:1px solid rgba(0, 0, 0, 0.1);border-radius:5px;padding:10px}.odd.svelte-117zipp{display:flex;justify-content:left;background-color:rgba(255, 0, 0, 0.05);border:1px solid rgba(0, 0, 0, 0.1);border-radius:5px;padding:10px}span.svelte-117zipp{font-weight:700;padding-right:5px}",
  map: null
};
const ChatMessages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chatmessages = [];
  function extractMatches(inputstring) {
    chatmessages = inputstring.split("//").slice(1).filter((message) => message !== "");
  }
  chatMessage.subscribe((messages) => extractMatches(messages));
  $$result.css.add(css$2);
  return `<main class="svelte-117zipp">${chatmessages.length ? `${each(chatmessages, (item, i) => {
    return `${i % 2 === 0 ? `<div class="even svelte-117zipp"><span class="svelte-117zipp">You: </span>${escape(item)}</div>` : `<div class="odd svelte-117zipp"><span class="svelte-117zipp">Friend:</span>${escape(item)}</div>`}`;
  })}` : `<div class="loading"></div>`}
</main>`;
});
const temperature_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "p.svelte-n95l19{font-family:'Noto Sans Chorasmian', sans-serif;font-size:12px;display:flex;justify-content:center;margin:0;padding:0;line-height:14px;padding-top:4px}.number.svelte-n95l19{font-family:'Noto Sans Mono', sans-serif;font-weight:700;font-size:12px}.slider.svelte-n95l19{-webkit-appearance:none;width:100%;height:5px;border-radius:5px;background:#e0e0e0;outline:none;opacity:0.7;transition:opacity 0.2s}.slider.svelte-n95l19:hover{opacity:1}.slider.svelte-n95l19::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:15px;height:15px;border-radius:50%;background:#00000095;cursor:pointer;transition:background 0.2s}.slider.svelte-n95l19::-webkit-slider-thumb:hover{background:#cccccc}",
  map: null
};
const Temperature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value = 5;
  temperature.update((aiTemp) => value);
  $$result.css.add(css$1);
  return `<div><p class="svelte-n95l19">chat randomness:  <span class="number svelte-n95l19">${escape(value)}</span></p>

	<input type="range" id="slider" class="slider svelte-n95l19" min="0" max="10" step="1"${add_attribute("value", value, 0)}>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-gkdv3b{margin:0px;display:grid;grid-template-areas:'topsection' 'bottomsection'}@media(min-width: 1025px){body.svelte-gkdv3b{display:block}.topsection.svelte-gkdv3b{width:100%;margin-top:8vh;display:flex;flex-direction:row}.bottomsection.svelte-gkdv3b{padding:0px 5px 5px 10px;border-radius:5px;border:1px solid black;background-color:rgb(230, 236, 237, 0.5);z-index:2}.temperature.svelte-gkdv3b{grid-area:temperature}.input.svelte-gkdv3b{grid-area:input}}@media(min-width: 801px) and (max-width: 1024px){body.svelte-gkdv3b{display:block}.topsection.svelte-gkdv3b{width:100%;margin-top:8vh;display:flex;flex-direction:row}.face.svelte-gkdv3b{width:50vw}.bottomsection.svelte-gkdv3b{padding:0px 5px 5px 10px;border-radius:5px;border:1px solid black;background-color:rgb(230, 236, 237, 0.5);z-index:2}.temperature.svelte-gkdv3b{grid-area:temperature}.input.svelte-gkdv3b{grid-area:input}}@media(max-width: 800px){body.svelte-gkdv3b{display:grid;grid-template-areas:'topsection' 'bottomsection';grid-template-rows:75vh 1fr}.topsection.svelte-gkdv3b{width:100%;margin-top:8vh;display:flex;flex-direction:column}.face.svelte-gkdv3b{width:100%;grid-area:face}.chatmessages.svelte-gkdv3b{grid-area:chatmessages}.bottomsection.svelte-gkdv3b{padding:0px 5px 5px 10px;border-radius:5px;border:1px solid black;background-color:rgb(230, 236, 237, 0.5);z-index:2}.temperature.svelte-gkdv3b{grid-area:temperature}.input.svelte-gkdv3b{grid-area:input}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-115jix4_START -->${$$result.title = `<title>Temp友</title>`, ""}<meta name="robots" content="noindex nofollow"><!-- HEAD_svelte-115jix4_END -->`, ""}

<body class="svelte-gkdv3b"><div class="topsection svelte-gkdv3b"><div class="face svelte-gkdv3b">${validate_component(FaceCard, "Face").$$render($$result, {}, {}, {})}</div>

		<div class="chatmessages svelte-gkdv3b">${validate_component(ChatMessages, "ChatMessages").$$render($$result, {}, {}, {})}</div></div>

	<div class="bottomsection svelte-gkdv3b"><div class="temperature svelte-gkdv3b">${validate_component(Temperature, "Temperature").$$render($$result, {}, {}, {})}</div>

		<div class="input svelte-gkdv3b">${validate_component(Input, "Input").$$render($$result, {}, {}, {})}</div></div>
</body>`;
});
export {
  Page as default
};
