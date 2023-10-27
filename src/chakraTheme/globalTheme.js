import { extendTheme } from "@chakra-ui/react";

export const globalTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    p: {
      50: "#f1f8ff",
      100: "#dafcd5",
      200: "#aff9ac",
      300: "#7fed85",
      400: "#5cdc70",
      500: "#2dc653",
      600: "#20aa50",
      700: "#168e4b",
      800: "#0e7244",
      900: "#085f3f",
    },
    ap: {
      50: "#2dc653",
      100: "#2dc653",
      200: "#2dc653",
      300: "#2dc653",
      400: "#2dc653",
      500: "#2dc653",
      600: "#2dc653",
      700: "#2dc653",
      800: "#2dc653",
      900: "#2dc653",
    },
    bnw: {
      200: "white",
      300: "white",
      500: "#000000",
      600: "#000000",
    },
    wnb: {
      200: "#000000",
      300: "#000000",
      500: "white",
      600: "white",
    },
    b: "#000000",
    bt: "#333333",
    w: "white",
    wt: "#eeeeee",
  },

  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#000000" : "white",
        color: props.colorMode === "dark" ? "wt" : "bt",
      },
    }),
  },

  components: {
    Drawer: {
      baseStyle: (props) => ({
        dialog: {
          bg: "transparent",
          color: props.colorMode === "dark" ? "wt" : "wt",
          boxShadow: "none",
        },
      }),
    },

    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === "dark" ? "black" : "white",
          color: props.colorMode === "dark" ? "wt" : "bt",
          boxShadow: "none",
          borderRadius: "24px",
          mx: "16px",
          backdropFilter: "blur(20px)",
        },
        overlay: {
          bg: "#5b5b5b50",
          backdropFilter: "blur(5px)",
        },
        header: {
          p: "24px",
        },
        body: {
          p: "24px",
          pt: "0px !important",
        },
        footer: {
          px: "16px",
        },
      }),
    },

    Toast: {
      baseStyle: {
        fontSize: [13, null, 15],
      },
    },

    Menu: {
      baseStyle: (props) => ({
        divider: {
          my: 1,
        },
        list: {
          bg: props.colorMode === "dark" ? "#000000cc" : "#ffffffcc",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--divider)",
          p: 0,
          overflow: "hidden",
        },
        item: {
          bg: "transparent",
          _hover: { bg: "var(--divider2)" },
          py: 3,
          px: 4,
        },
      }),
    },

    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: "8px",
      },
      variants: {
        outline: {
          border: "2px solid",
        },
      },
    },

    Input: {
      baseStyle: (props) => ({
        field: {
          _autofill: {
            boxShadow:
              props.colorMode === "dark"
                ? "0 0 0px 1000px #000000 inset"
                : "0 0 0px 1000px #ffffff inset",
            border: "2px solid var(--divider) !important",
          },
        },
      }),
    },

    Checkbox: {
      baseStyle: (props) => ({
        icon: {
          color: "wt",
        },
      }),
    },

    Tooltip: {
      baseStyle: {
        bg: "p.500",
        color: "w",
        "--popper-arrow-bg": "#0097e8",
      },
    },
  },
});
