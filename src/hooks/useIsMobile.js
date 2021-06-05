import useMedia from "use-media";

export const useIsMobile = () => {
  const isMobile = useMedia({ maxWidth: "400px" });
  return isMobile;
};
