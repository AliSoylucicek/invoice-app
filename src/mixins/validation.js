export default {
  data() {
    return {
      rules: {
        required: (v) => !!v || "This field is required",
        alphaNum: (v) =>
          !!v.match(/^[0-9a-zA-Z]+$/) ||
          "Only alpha-numeric characters are allowed",
        taxLength: (v) =>
          v.length <= 11 || "Tax code cannot be longer than 11 characters",
      },
    };
  },
};
