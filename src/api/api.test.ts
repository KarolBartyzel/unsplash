import { transformImages, transformImage } from "./api";

describe("transformImages", () => {
  test("transforms DTO", () => {
    expect(
      transformImages({
        id: "abcd",
        urls: {
          regular: "https://url.com",
        },
        description: "Title",
      })
    ).toEqual({ id: "abcd", url: "https://url.com", description: "Title" });
  });

  test("transforms DTO with description null", () => {
    expect(
      transformImages({
        id: "abcd",
        urls: {
          regular: "https://url.com",
        },
        description: null,
      })
    ).toEqual({ id: "abcd", url: "https://url.com", description: null });
  });
});

describe("transformImage", () => {
  test("transforms DTO", () => {
    expect(
      transformImage({
        id: "abcd",
        user: {
          name: "User",
          profile_image: {
            small: "https://image.com",
          },
        },
        description: "Title",
        urls: {
          regular: "https://url.com",
        },
        exif: {
          make: "Canon",
          model: "Canon EOS 40D",
          exposure_time: "0.011111111111111112",
          aperture: "4.970854",
          focal_length: "37",
          iso: "100",
        },
      })
    ).toEqual({
      camera: {
        aperture: 4.970854,
        focalLength: 37,
        iso: 100,
        make: "Canon",
        model: "Canon EOS 40D",
        shutterSpeed: 24.51981772534411,
      },
      description: "Title",
      id: "abcd",
      url: "https://url.com",
      user: {
        image: "https://image.com",
        name: "User",
      },
    });
  });

  test("transforms DTO with nulls", () => {
    expect(
      transformImage({
        id: "abcd",
        user: {
          name: "User",
          profile_image: {
            small: "https://image.com",
          },
        },
        description: null,
        urls: {
          regular: "https://url.com",
        },
        exif: {
          make: null,
          model: null,
          exposure_time: null,
          aperture: null,
          focal_length: null,
          iso: null,
        },
      })
    ).toEqual({
      camera: {
        aperture: null,
        focalLength: null,
        iso: null,
        make: null,
        model: null,
        shutterSpeed: null,
      },
      description: null,
      id: "abcd",
      url: "https://url.com",
      user: {
        image: "https://image.com",
        name: "User",
      },
    });
  });
});
