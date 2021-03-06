import { Component } from '@angular/core';

@Component({
  templateUrl: './ng-for-demo.component.html',
  styles: [
  ]
})
export class NgForDemoComponent {

  divisions = [
    { id: 1, name: 'Ayeyarwady Region', mmName: 'ဧရာဝတီတိုင်းဒေသကြီး', capital: 'Pathein', region: 'Lower' },
    { id: 2, name: 'Bago Region', mmName: 'ပဲခူးတိုင်းဒေသကြီး', capital: 'Bago', region: 'Lower' },
    { id: 3, name: 'Chin State', mmName: 'ချင်းပြည်နယ်', capital: 'Hakha', region: 'West' },
    { id: 4, name: 'Kachin State', mmName: 'ကချင်ပြည်နယ်', capital: 'Myitkyina', region: 'North' },
    { id: 5, name: 'Kayah State', mmName: 'ကယားပြည်နယ်', capital: 'Loikaw', region: 'East' },
    { id: 6, name: 'Kayin State', mmName: 'ကရင်ပြည်နယ်', capital: 'Pa-an', region: 'South' },
    { id: 7, name: 'Magway Region', mmName: 'မကွေးတိုင်းဒေသကြီး', capital: 'Magwe', region: 'Central' },
    { id: 8, name: 'Mandalay Region', mmName: 'မန္တလေးတိုင်းဒေသကြီး', capital: 'Mandalay', region: 'Central' },
    { id: 9, name: 'Mon State', mmName: 'မွန်ပြည်နယ်', capital: 'Mawlamyine', region: 'South' },
    { id: 10, name: 'Rakhine State', mmName: 'ရခိုင်ပြည်နယ်', capital: 'Sittwe', region: 'West' },
    { id: 11, name: 'Shan State', mmName: 'ရှမ်းပြည်နယ်', capital: 'Taunggyi', region: 'East' },
    { id: 12, name: 'Sagaing Region', mmName: 'စစ်ကိုင်းတိုင်းဒေသကြီး', capital: 'Monywa', region: 'North' },
    { id: 13, name: 'Tanintharyi Region', mmName: 'တနင်္သာရီတိုင်းဒေသကြီး', capital: 'Dawei', region: 'South' },
    { id: 14, name: 'Yangon Region', mmName: 'ရန်ကုန်တိုင်းဒေသကြီး', capital: 'Yangon', region: 'Lower' },
    { id: 15, name: 'Naypyidaw Union Territory', mmName: 'နေပြည်တော် ပြည်ထောင်စုနယ်မြေ', capital: 'Naypyidaw', region: 'Central' }
  ]

}
