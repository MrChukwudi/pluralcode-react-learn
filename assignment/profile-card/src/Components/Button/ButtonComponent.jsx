export const ButtonComponent = ({
  text,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  background,
  color,
  width,
  height,
}) => {
  return (
    <button
      style={{
        background: background,
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        color: color,
        width: width,
        height: height,
      }}
    >
      {text}
    </button>
  );
};

// const MyButton = () => {
//   return (
//     <ButtonComponent
//       text=""
//       borderBottomLeftRadius=""
//       borderBottomRightRadius=""
//       background="#fff"
//       color="black"
//       width="100px"
//       height="50px"
//     />
//   );
// };

export default ButtonComponent;
