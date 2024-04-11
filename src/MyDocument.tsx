import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import DocumentF0103308 from "./DocumentP";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => (
  <>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <DocumentF0103308 />
        </View>
        {/* <View style={styles.section}>
          <Text>Section #2</Text>
        </View> */}
      </Page>
    </Document>
  </>
);
export default MyDocument;
