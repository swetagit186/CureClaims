import React from 'react'
import { Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';
import HospitalForm from './HospitalForm';
import PatientForm from './PatientForm';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
      paddingBottom: 50,
    },
    section: {
      marginBottom: 10,
    },
    heading: {
      fontSize: 18,
      marginBottom: 10,
    },
  });
const PdfDocument = ({ formData }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Hospital Details</Text>
          <Text><HospitalForm/></Text>
          <Text><PatientForm/></Text>
          <Text>Findings: {formData.findings}</Text>
        </View>
      </Page>
    </Document>
  );

export const PreAuthForm = () => {
  return (
    <div>PreAuthForm</div>
  )
}
