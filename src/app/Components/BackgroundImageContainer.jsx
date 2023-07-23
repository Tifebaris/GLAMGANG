// components/BackgroundImageContainer.js

const images = [
    {
      imageUrl: "/img11.jpeg",
      text: "Text 1",
    },
    {
      imageUrl: "/img14.jpeg",
      text: "Text 2",
    },
    {
      imageUrl: "/img10.jpeg",
      text: "Text 3",
    },
    {
      imageUrl: "/img9.jpeg",
      text: "Text 4",
    },
    {
      imageUrl: "/img5.jpeg",
      text: "Text 5",
    },
  ];
  
  const BackgroundImageContainer = () => {
    // You can select an image randomly or use a specific index.
    // For example, here we are choosing a random image from the array.
    const randomIndex = Math.floor(Math.random() * images.length);
    const backgroundImage = images[randomIndex].imageUrl;
  
    return (
      <div
        className="background-image-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Add any content or components you want to display on top of the background image */}
      </div>
    );
  };
  
  export default BackgroundImageContainer;
  