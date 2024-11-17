import { motion } from "framer-motion";
import { SiDailydotdev } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaHeartBroken } from "react-icons/fa";
import { useState } from "react";

// Array of icons with unique colors for each transition and corresponding URLs
const icons = [
  {
    component: SiDailydotdev,
    key: "dailydotdev",
    colors: ["#FF8E5E", "#FF5EC7", "#FF8E5E"],
    url: "https://app.daily.dev/wannabedev7",
    inactive: false,
  },
  {
    component: BsGithub,
    key: "github",
    colors: ["#67F5B1", "#FF5E73", "#67F5B1"],
    url: "https://github.com/BigBen-7",
    inactive: false,
  },
  {
    component: SlSocialLinkedin,
    key: "linkedin",
    colors: ["#1669B4", "#5EFFEB", "#1669B4"],
    url: "https://www.linkedin.com/in/benard-simon-181413244/",
    inactive: false,
  },
  {
    component: BsInstagram,
    key: "instagram",
    colors: ["#FF5E5E", "#FFA15E", "#FF5E5E"],
    url: "https://instagram.com/",
    inactive: true,
  },
  {
    component: BsTwitterX,
    key: "twitterx",
    colors: ["#5E92FF", "#FF8E5E", "#5E92FF"],
    url: "https://twitter.com/",
    inactive: true,
  },
];
// Emoji Popup Component
function EmojiPopup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5, scale: 0.8 }}
      animate={{ opacity: 1, y: -40, scale: 1 }}
      exit={{ opacity: 0, y: -60, scale: 1.2 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="absolute text-red-500 text-3xl" // Red broken heart emoji
    >
      <FaHeartBroken/>
    </motion.div>
  );
}

function SocialIcons() {
  const [showEmoji, setShowEmoji] = useState(null);

  const handleInactiveClick = (key) => {
    setShowEmoji(key);
    setTimeout(() => setShowEmoji(null), 800);
  };

  return (
    <div className="flex gap-4">
      {icons.map((Icon, index) => (
        <a
          key={Icon.key}
          href={Icon.inactive ? "#" : Icon.url}
          target={Icon.inactive ? "_self" : "_blank"}
          rel="noopener noreferrer"
          onClick={(e) => {
            if(Icon.inactive){
              e.preventDefault(); //prevent link navigation for inactive icons
              handleInactiveClick(Icon.key);
            }}
            }
          aria-label={Icon.key} // Accessible label
        >
          <motion.div
            initial={{ scale: 1, color: Icon.colors[0] }}
            animate={{ scale: [1, 1.5, 1], color: Icon.colors }}
            transition={{
              duration: 3, // Duration of the animation cycle
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: index * 0.3, // Stagger effect for each icon
            }}
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Icon.component size={14} /> {/* Icon size */}
            {/* Conditionally render the emoji pop-up */}
            {showEmoji === Icon.key && <EmojiPopup />}
          </motion.div>
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
