import { motion } from "framer-motion";

const Example = () => {
  return (
    <div className="example">
      <h1>Example</h1>
      {/* <div className="y-gap"> */}
      <h2>Gestures</h2>
      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.9 }}>
        Button
      </motion.button>
      {/* </div> */}
      {/* <div className="y-gap"> */}
      <h2>Propagation</h2>
      <motion.div whileTap={{ scale: 1.9 }}>
        <button onPointerDownCapture={(e) => e.stopPropagation()}>
          Button
        </button>
      </motion.div>
      {/* </div> */}
      {/* <div className="y-gap"> */}
      <h2>Hover</h2>
      <motion.div whileHover={{ scale: 5 }}>abc</motion.div>
      {/* </div> */}
      <motion.div whileFocus={{ scale: 5 }}>abc</motion.div>
    </div>
  );
};

export default Example;
