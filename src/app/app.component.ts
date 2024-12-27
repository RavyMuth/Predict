import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'predict';

  licensePlate: string = ''; // Input field for license plate
  result: string = ''; // Resulting numerology meaning
  errorMessage: string = ''; // Error message for invalid input
  showInstructions: boolean = false; // Flag to control instruction visibility

  numerologyMeanings: { [key: number]: string } = {
    1: 'តំណាងពន្លឺ។ ម្ចាស់លេខនឹងមានឋានៈខ្ពង់ខ្ពស់ មុខរបររកស៊ីរីកចម្រើន។',
    2: 'តំណាងឱ្យទឹក។ ផ្ដល់សេចក្តីសុខភាពសប្បាយ ត្រជាក់ត្រជុំ មានអ្នកតាមជួយជ្រោមជ្រែង។',
    3: 'ជាលេខ​តំណាងមេឃដី។ ម្ចាស់ទ្រព្យនឹងទទួលបានព្រះពរហូរហៀរ ព្រមទាំងជោគជ័យគ្រប់ភារកិច្ច។',
    4: 'លេខតំណាងសេចក្ដីស្លាប់។ តាមក្បួនហុងស៊ុយគេជឿថា មានតែរឿងជម្លោះទាំងក្នុងគ្រួសារនិងជាមួយអ្នកដទៃ ​ហើយចេះតែមានបញ្ហា​មិន​ល្អមកពីគ្រប់ទិសទី។',
    5: 'និមិត្តរូបនៃជីវិត។ ប៉ុន្តែតាមជំនឿមិនសូវជាល្អនោះទេ។ គេជឿថា បញ្ហាហិរញ្ញវត្ថុត្រូវជាប់គាំង។ យ៉ាងណាមិញបញ្ហាជីវិតនឹងតែជួបសុភមង្គល។',
    6: 'លេខតំណាងឱ្យពពួកអមនុស្ស។ បើសែនត្រូវមាន​អ្នក​ជួយថែរក្សា បើខុស​ភាព​ចម្រុងចម្រើននឹងអន់ថយ មានតែជំងឺតម្កាត់តាមយារយី។',
    7: 'តំណាងព្រះជាម្ចាស់។ ជួយឱ្យសុខសប្បាយ មាន​ប្រាក់​ច្រើន និង​រួចផុត​ពី​គ្រោះថ្នាក់ទាំងឡាយទាំងពួង។',
    8: 'តំណាងទិសទាំង៨។ ម្ចាស់យាននឹងទទួលបានភាពរុងរឿង ​សុខភាពល្អបរិបូណ៌ សម្បូរទ្រព្យសម្បត្តិ​ និងទទួលបានជោគជ័យក្នុងការងារ។​',
    9: 'តំណាងឋានសួគ៌។ សេចក្ដីសុខគ្រប់ប្រការ ចម្រុងរុងរឿងទាំងអាជីពនិងជំនួញ រីឯគ្រួសារនឹងចៀសឆ្ងាយពីរឿងអពមង្គល៕',
  };

  calculateNumerology(): void {
    // Ensure only numeric input and exactly 4 characters
    if (!/^\d{4}$/.test(this.licensePlate)) {
      this.errorMessage = 'សូមបញ្ចូលស្លាកលេខមានចំនួន ៤ លេខតែប៉ុណ្ណោះ!';
      this.result = '';
      return;
    }

    this.errorMessage = '';

    // Convert string to digits
    const digits = this.licensePlate.split('').map(Number);

    // Sum the digits and reduce to a single digit
    const finalSum = digits.reduce((acc, digit) => acc + digit, 0) % 9 || 9;

    // Set the result
    this.result = this.numerologyMeanings[finalSum] || 'អត់មានអត្ថន័យសម្រាប់លេខនេះ។';
  }

  toggleInstructions(): void {
    // Toggle the visibility of the instruction section
    this.showInstructions = !this.showInstructions;
  }
  
}
