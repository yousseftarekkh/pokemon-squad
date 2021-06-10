import { StyleSheet, Dimensions } from "react-native";
import colors, { backgroundColors } from "../../styles/palette";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    marginVertical: 10,
    flex: 1,
  },
  imageStyle: {
    flex: 1,
  },
  swiperImageStyle: {
    height: 200,
    width: "100%",
  },
  content1Style: {
    width: "70%",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content2Style: {
    justifyContent: "space-between",
    width: "70%",
    padding: 10,
    borderRadius: 10,
  },
  specieContainerStyle: {
    backgroundColor: backgroundColors[1],
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },

  typeContainerStyle: {
    marginRight: 8,
    backgroundColor: backgroundColors[2],
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
  headerTextStyle: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: backgroundColors[1],
  },
  valueTextStyle: {
    fontSize: 16,
    fontFamily: "Poppins-Light",
    color: colors.white,
  },
});

export default styles;
