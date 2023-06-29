import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import { format } from "date-fns";
import bebasNeue from "../../../assets/BebasNeue-Regular.ttf";

Font.register({
  family: "Bebas Neue",
  fontStyle: "normal",
  fontWeight: "normal",
  fonts: [{ src: bebasNeue }],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Bebas Neue",
    fontSize: 12,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 30,
  },
  titleContainer: {
    flexDirection: "row",
    marginLeft: 70,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    borderBottom: "1px solid #525252",
    padding: 5,
  },
  subtitle2: {
    fontSize: 18,
    marginTop: 10,
    color: "#ffffff",
    padding: 5,
  },
  text: {
    margin: 5,
    fontSize: 12,
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 30,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    marginTop: 15,
    borderBottom: "1px solid #525252",
  },
  tableColHeader: {
    width: "25%",
    color: "#ffffff",
    backgroundColor: "#525252",
    textAlign: "left",
    padding: 5,
  },
  tableCol: {
    width: "25%",
    textAlign: "left",
    padding: 5,
  },
  image: {
    width: "auto",
    height: 50,
    objectFit: "contain",
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  centered: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  information: {
    display: "flex",
    alignSelf: "flex-start",
  },
});

const DetailPdf = ({ cart, user, order }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.logoContainer, styles.centered]}>
          <Image src="src/assets/icons/Unicorn-black-logo.png" alt="Logo" style={styles.logo} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Order Details</Text>
        </View>
        <Text style={styles.subtitle}>
          Order: {order.id} | {format(new Date(order.createdAt), "dd-MMMM-yyyy")}
        </Text>
        <View style={styles.information}>
          <Text style={styles.text}>
            Customer: {user.firstname} {user.lastname}
          </Text>
          <Text style={styles.text}>
            Shipping date: {format(new Date(order.shippingDate), "dd-MMMM-yyyy")}
          </Text>
          <Text style={styles.text}>
            Expected delivery date: {format(new Date(order.deliveryDate), "dd-MMMM-yyyy")}
          </Text>
          <Text style={styles.text}>Order status: {order.status}</Text>
          <Text style={styles.text}>Payment method: {order.paymentMethod}</Text>
          <Text style={styles.text}>Total: US$ {cart.totalAmount}</Text>
        </View>
        <Text style={styles.subtitle2}>Products in this order</Text>
        <View style={[styles.table, styles.centered]}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.text}>Image</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.text}>Product</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.text}>Price</Text>
            </View>
          </View>
          {cart.products.map((product, index) => {
            const photo = product.style.photos.filter(
              (photo) => photo.includes("Main") && photo.includes(`${product.container.name}`),
            )[0];

            return (
              <View style={styles.tableRow} key={index}>
                <View style={[styles.tableCol, styles.centeredImage]}>
                  <Image
                    src={`${import.meta.env.VITE_BACK_URL}/img/${photo}`}
                    style={styles.image}
                  />
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.text}>{product.name}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.text}>
                    {product.quantity} x US$ {product.price}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default DetailPdf;
