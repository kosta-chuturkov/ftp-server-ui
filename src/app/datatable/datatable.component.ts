import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columnNamesInternal: string[] = ['name', 'timestamp', 'size', 'download_hash', 'delete_hash', 'file_type'];
  columnsDisplayname: string[] = ['Name', 'Uploaded', 'Size', 'Download', 'Delete', 'Type'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getColor(file_type: string) {
    switch (file_type) {
      case 'Private': return '#000000';
      case 'Public': return '#00b359';
      case 'Shared': return '#0073e6';
    }
    return '#800044';
  }
}
export interface UserUploadedFile {
  name: string;
  timestamp: string;
  size: number;
  download_hash: string;
  delete_hash: string;
  file_type: string;
}
const ELEMENT_DATA: UserUploadedFile[] = [
  {
    size: 316154,
    name: 'Porter',
    timestamp: '2015-07-14T12:18:52',
    download_hash: 'd2098076-941c-4dc9-bf09-b358a5c23184',
    delete_hash: '1985120d-a2a3-49d6-9916-bc731f978236',
    file_type: 'Public'
  },
  {
    size: 237077,
    name: 'Long',
    timestamp: '2018-07-08T09:40:10',
    download_hash: '8c85e385-cd75-47ea-a713-7045a80e78e4',
    delete_hash: '54de1e93-f7c4-4bc5-a180-67f90055d610',
    file_type: 'Public'
  },
  {
    size: 60950,
    name: 'Alta',
    timestamp: '2016-03-06T07:52:51',
    download_hash: 'aab131ed-df82-4e23-bb70-481c983eaae4',
    delete_hash: '1f373122-675d-4975-88ea-245abeac6465',
    file_type: 'Public'
  },
  {
    size: 374645,
    name: 'Tania',
    timestamp: '2018-05-03T09:42:14',
    download_hash: 'a9206738-c056-4afd-a615-296cd9c73a33',
    delete_hash: '663c848f-13fa-496d-814f-cff69d792699',
    file_type: 'Private'
  },
  {
    size: 173220,
    name: 'Gardner',
    timestamp: '2017-02-10T09:43:58',
    download_hash: 'e7781ea3-6e17-4929-8fbe-b5c7df9521b0',
    delete_hash: 'c2a0972e-e0e0-4ae2-83a4-f27ca150c3c7',
    file_type: 'Shared'
  },
  {
    size: 222744,
    name: 'Rojas',
    timestamp: '2016-01-03T07:59:11',
    download_hash: 'ccc22ebf-0011-4c59-bf30-4c60a9c1b639',
    delete_hash: 'a70286e4-e4b7-45ee-b43a-ef08a0cbd2b7',
    file_type: 'Private'
  },
  {
    size: 220694,
    name: 'Debora',
    timestamp: '2018-04-01T02:27:42',
    download_hash: '8a773153-d398-4e6c-9a5c-d7e2bacd673e',
    delete_hash: 'a253afb6-4cd8-4389-95b0-22861cd12229',
    file_type: 'Shared'
  },
  {
    size: 365208,
    name: 'Ella',
    timestamp: '2015-11-16T11:49:17',
    download_hash: 'd6006d76-a30b-480f-b170-d41e7d7ff187',
    delete_hash: '65de8888-f24c-4f4a-82d5-d72817b7ee2f',
    file_type: 'Public'
  },
  {
    size: 96299,
    name: 'Lindsay',
    timestamp: '2016-09-07T08:42:25',
    download_hash: 'dd48bda3-d441-4c71-9ffe-924320fb722d',
    delete_hash: '2a6af196-1353-4473-ae93-dd824fc9d172',
    file_type: 'Shared'
  },
  {
    size: 87407,
    name: 'Todd',
    timestamp: '2016-03-11T01:42:51',
    download_hash: 'aa9aebab-e3ac-4474-8c93-b8196cf27ede',
    delete_hash: '6b7fc6b1-c2db-4637-af34-266a088aeb5d',
    file_type: 'Private'
  },
  {
    size: 208843,
    name: 'Claire',
    timestamp: '2014-10-29T05:13:26',
    download_hash: 'ff5ba77c-6207-46a7-bd06-5e0d2fb498b4',
    delete_hash: 'af7c91fb-cd10-4417-aa1a-3c386cb873cf',
    file_type: 'Public'
  },
  {
    size: 17556,
    name: 'Sanders',
    timestamp: '2016-05-15T04:03:31',
    download_hash: '35c211ac-0d8a-4e40-96c6-090c86bab68b',
    delete_hash: '501747ea-ffe6-4058-b17b-3290cc0bab40',
    file_type: 'Public'
  },
  {
    size: 11631,
    name: 'Dale',
    timestamp: '2014-04-16T08:52:10',
    download_hash: '964d6e30-82f9-414e-8082-1d8adbef47e1',
    delete_hash: '56b88453-7092-402b-80a7-a44c858e4760',
    file_type: 'Shared'
  },
  {
    size: 155591,
    name: 'Holmes',
    timestamp: '2014-05-20T09:00:38',
    download_hash: 'b8f62bb9-8ac3-4fc8-b89d-75371ed8307c',
    delete_hash: 'c92bc919-49aa-46d5-bbf5-3ff046958550',
    file_type: 'Public'
  },
  {
    size: 325072,
    name: 'Shaffer',
    timestamp: '2015-06-18T03:49:23',
    download_hash: '2e6d70a9-9d67-44d3-871f-74fa51865670',
    delete_hash: 'd73ca23e-eb41-4945-a7bf-8b164458f346',
    file_type: 'Public'
  },
  {
    size: 104513,
    name: 'Moreno',
    timestamp: '2018-05-03T08:49:07',
    download_hash: '59570197-45e5-4a63-b7cf-88378a1cd778',
    delete_hash: '96e59d33-4440-445d-8e07-c6dfea4e4dc4',
    file_type: 'Public'
  },
  {
    size: 230176,
    name: 'Callie',
    timestamp: '2017-05-26T01:34:58',
    download_hash: 'e7340521-a79d-4dbd-8259-ab708c12aae4',
    delete_hash: '6db87556-75b6-469d-8635-5673ebd73483',
    file_type: 'Private'
  },
  {
    size: 194898,
    name: 'Adrienne',
    timestamp: '2016-02-20T01:51:41',
    download_hash: '9cfbc475-566a-4ba1-ba91-d7393a8ef647',
    delete_hash: '3c50da5c-30f0-4167-985a-5551f1912fb2',
    file_type: 'Shared'
  },
  {
    size: 13864,
    name: 'Estes',
    timestamp: '2014-08-12T03:56:50',
    download_hash: 'd7b9c989-d419-4736-8fc3-9d19760fe5e7',
    delete_hash: '3a4cdf13-e59b-4c71-8494-f1312de12d77',
    file_type: 'Private'
  },
  {
    size: 327632,
    name: 'Glenda',
    timestamp: '2016-09-12T11:15:08',
    download_hash: 'cd9c6125-d4ef-4837-9e75-fed80d397a74',
    delete_hash: 'a95ed633-35bf-4e80-8132-e4eebecb1311',
    file_type: 'Private'
  },
  {
    size: 110153,
    name: 'Mathews',
    timestamp: '2015-03-30T01:49:30',
    download_hash: '4eb508ca-f6a5-4ad8-a58b-39e247df211b',
    delete_hash: '2ee99782-fb47-4bdd-94c2-c5c20f41404e',
    file_type: 'Private'
  },
  {
    size: 61426,
    name: 'Moore',
    timestamp: '2015-01-28T02:34:01',
    download_hash: '624932cb-84c3-46b7-bb31-5916d28fe1c1',
    delete_hash: 'd34d25a7-a39d-4d66-a5b2-312f063e9139',
    file_type: 'Public'
  },
  {
    size: 205196,
    name: 'Mueller',
    timestamp: '2018-06-07T08:29:23',
    download_hash: '099c7ce2-385a-4d76-a4f3-aea800c343bf',
    delete_hash: '9573d523-e519-4cfd-8dc8-15a1d04dd6a8',
    file_type: 'Public'
  },
  {
    size: 268169,
    name: 'Rich',
    timestamp: '2018-03-21T12:57:03',
    download_hash: '870b6f8a-97fd-4829-aff5-5ce80aa07fc8',
    delete_hash: 'f5dd198f-c82f-4f86-8af9-c39ad0653495',
    file_type: 'Shared'
  },
  {
    size: 187902,
    name: 'Lily',
    timestamp: '2015-12-14T05:08:53',
    download_hash: 'af23b85e-a916-4973-bc0a-a2474c06da63',
    delete_hash: '8eec1794-2d5c-4095-b897-a7a7257a4d5b',
    file_type: 'Public'
  },
  {
    size: 55586,
    name: 'Alford',
    timestamp: '2014-04-14T03:29:54',
    download_hash: '8f9cf3a6-932a-4cc7-82d8-dbbee1778e4d',
    delete_hash: '2f04cba7-251d-4e55-b5e8-2f066e471670',
    file_type: 'Private'
  },
  {
    size: 135876,
    name: 'Elizabeth',
    timestamp: '2014-10-21T10:01:38',
    download_hash: '51faad9f-17ee-4b3f-b0a5-52a75797d275',
    delete_hash: 'f2dd851e-b131-4aea-abbf-c0727960b3d7',
    file_type: 'Public'
  },
  {
    size: 56359,
    name: 'Hutchinson',
    timestamp: '2014-01-23T12:53:43',
    download_hash: 'f58c8011-14c5-4fa5-a14a-01635e43e42c',
    delete_hash: 'da38b3a2-22db-4d5d-bf89-d058788a7df6',
    file_type: 'Public'
  },
  {
    size: 128741,
    name: 'Earline',
    timestamp: '2014-10-31T09:30:59',
    download_hash: '528f872a-a45e-465e-adad-987c6be343a8',
    delete_hash: '609844b9-df0b-46d1-a543-4395e70c407c',
    file_type: 'Public'
  },
  {
    size: 183420,
    name: 'Conway',
    timestamp: '2017-04-10T12:55:30',
    download_hash: 'e2d92210-7243-44c8-8732-7d3c3f3fe993',
    delete_hash: 'd1bf9bfb-24ae-445d-a4d5-569181583a5d',
    file_type: 'Private'
  },
  {
    size: 268614,
    name: 'Hull',
    timestamp: '2016-11-05T05:20:48',
    download_hash: '9d2db077-48ce-4408-910c-9b033723c2b4',
    delete_hash: 'a0917956-1383-4802-8b43-045f7944f022',
    file_type: 'Shared'
  },
  {
    size: 148907,
    name: 'Consuelo',
    timestamp: '2017-11-14T09:32:13',
    download_hash: 'd998705e-448c-4910-a433-2a1e4aa6837a',
    delete_hash: '66c788f4-a697-43ed-80ec-15f2c7c6b791',
    file_type: 'Public'
  },
  {
    size: 59599,
    name: 'Bessie',
    timestamp: '2015-04-05T05:50:00',
    download_hash: 'ceba110d-f7e8-4cae-93d2-9619d63e23ff',
    delete_hash: '557f4076-6036-4e84-8687-a7f1baefff80',
    file_type: 'Shared'
  },
  {
    size: 28627,
    name: 'Lindsey',
    timestamp: '2017-08-25T01:03:20',
    download_hash: '65fda998-9206-4662-bd6c-b0ff1983031a',
    delete_hash: 'a3db25d8-2a60-4c67-9a7a-116b3113dce8',
    file_type: 'Private'
  },
  {
    size: 260496,
    name: 'Zimmerman',
    timestamp: '2016-06-27T01:24:26',
    download_hash: '163a92a7-0a84-493d-a2e2-c0848f81b3ff',
    delete_hash: '97c26164-702c-4a0e-9eb8-aa3868b1ec5b',
    file_type: 'Public'
  },
  {
    size: 261791,
    name: 'Clare',
    timestamp: '2015-10-22T08:37:56',
    download_hash: '6fabac4e-8773-4917-aca8-e6f1d3ed0aee',
    delete_hash: '019c02b9-58dd-4eac-bff3-4b6f81c35e74',
    file_type: 'Shared'
  },
  {
    size: 56377,
    name: 'Fay',
    timestamp: '2015-08-20T10:35:42',
    download_hash: '54a78963-89a7-4939-b969-2e642901d843',
    delete_hash: '41e81354-452e-49aa-9b06-d08f3b4aaa13',
    file_type: 'Public'
  },
  {
    size: 133004,
    name: 'Avila',
    timestamp: '2015-06-16T05:14:33',
    download_hash: '68e5c619-80a7-4ed2-bc3b-97b7b6626683',
    delete_hash: '44dc9686-e2b7-40fb-b4dc-8adb5a534656',
    file_type: 'Private'
  },
  {
    size: 261411,
    name: 'Marquita',
    timestamp: '2016-11-05T05:45:15',
    download_hash: '632f78ea-afdd-4716-a702-371de2c129b1',
    delete_hash: 'af494abd-b054-433e-ba18-adec1811ea52',
    file_type: 'Shared'
  },
  {
    size: 67025,
    name: 'Robert',
    timestamp: '2016-11-18T07:05:36',
    download_hash: '97b51d46-5e2d-4999-a830-672acb7b9ab9',
    delete_hash: '1c585e00-12ed-48bf-ac52-0b7bbd8bd0ff',
    file_type: 'Public'
  },
  {
    size: 97299,
    name: 'Susanna',
    timestamp: '2018-03-10T11:39:52',
    download_hash: 'aa63ec42-22b8-4020-94ee-fd28d54e07a5',
    delete_hash: '0ab79778-dba7-4f1d-8020-50488ab28a55',
    file_type: 'Private'
  },
  {
    size: 352714,
    name: 'Carroll',
    timestamp: '2016-06-25T05:29:17',
    download_hash: '8741def3-cd65-42d3-8743-95bd51b3d409',
    delete_hash: 'dc9a1143-5078-44c3-b23c-15f954f95b4d',
    file_type: 'Private'
  },
  {
    size: 78168,
    name: 'Spears',
    timestamp: '2016-06-24T06:02:26',
    download_hash: 'e006b1c9-da69-4fb1-9614-0e224e6f0bee',
    delete_hash: '3c464ae3-c415-49c6-ae27-5b97df8d9dfe',
    file_type: 'Public'
  },
  {
    size: 194515,
    name: 'Rhonda',
    timestamp: '2018-04-19T02:58:39',
    download_hash: 'bd1bb7be-bc05-4f7b-9e06-47215e7a4795',
    delete_hash: '859c82f5-81a1-4428-9e7a-d6c6eace8cfc',
    file_type: 'Public'
  },
  {
    size: 304837,
    name: 'Roberson',
    timestamp: '2018-10-04T11:25:19',
    download_hash: '5d94fd32-a1b0-4fe2-a07f-4a7cde23c452',
    delete_hash: 'b7e9aeb8-130a-458f-95d3-242a4d1bcba9',
    file_type: 'Public'
  },
  {
    size: 36830,
    name: 'Tricia',
    timestamp: '2017-12-04T10:54:12',
    download_hash: '3cbb86a5-f7de-4d14-94a8-ecffc9168b10',
    delete_hash: '87976d37-5a62-4bfb-b797-74d8bdba2299',
    file_type: 'Shared'
  },
  {
    size: 299768,
    name: 'Aileen',
    timestamp: '2016-03-16T02:29:47',
    download_hash: '12a79c7e-1391-413c-989e-68b76e4351c3',
    delete_hash: 'aed798ca-1ee9-408c-aeb5-f2d480030db6',
    file_type: 'Shared'
  },
  {
    size: 363383,
    name: 'Melanie',
    timestamp: '2015-03-24T05:55:47',
    download_hash: 'c897380f-dca3-4c24-bae6-cd8623364e5f',
    delete_hash: '152d2a37-4ac5-48b0-b314-5441e93e02b1',
    file_type: 'Public'
  },
  {
    size: 157482,
    name: 'Leonard',
    timestamp: '2018-07-16T10:03:50',
    download_hash: 'b56d3c79-11d8-46d5-bfa8-12a3ae3a2732',
    delete_hash: 'ef204a5a-b98d-4db1-b11d-e5dd1c144d65',
    file_type: 'Public'
  },
  {
    size: 248680,
    name: 'Kate',
    timestamp: '2017-02-25T06:30:59',
    download_hash: 'd7833d12-4797-4a2d-be5c-a84e9d93d2c0',
    delete_hash: '1fe42386-e0d6-47f3-b8b0-bff14f3c481f',
    file_type: 'Public'
  },
  {
    size: 515,
    name: 'Clements',
    timestamp: '2016-09-08T05:49:28',
    download_hash: 'b778d24f-affa-4f46-99db-eb48cfd94e1e',
    delete_hash: 'd74cf1c6-cf78-4960-8522-c070c49e564d',
    file_type: 'Public'
  },
  {
    size: 156331,
    name: 'Rosemarie',
    timestamp: '2014-12-24T09:28:00',
    download_hash: '7b2a71ba-2113-4127-8f40-8d2fcb51c468',
    delete_hash: '5694a8af-1997-446e-b9b7-c4820239e040',
    file_type: 'Shared'
  },
  {
    size: 317872,
    name: 'Carmella',
    timestamp: '2018-01-01T10:20:07',
    download_hash: '12f0e379-423f-4cf0-b9a5-bbd04ce0b8f4',
    delete_hash: 'c6b672ce-6c07-4f4e-b5f4-a13d725aec83',
    file_type: 'Private'
  },
  {
    size: 161552,
    name: 'Mia',
    timestamp: '2016-12-21T06:33:12',
    download_hash: '614846ed-7cd2-4c1c-8f2d-93d4c5b573fd',
    delete_hash: '268b72f0-11a1-4758-ae5e-c4082c34e79f',
    file_type: 'Public'
  },
  {
    size: 289555,
    name: 'Donna',
    timestamp: '2014-03-18T10:06:30',
    download_hash: '6d5b4146-4db2-4c68-83de-d2f47e45fa6b',
    delete_hash: '311d29e1-49da-465b-ab25-9f1648b2b0b9',
    file_type: 'Shared'
  },
  {
    size: 218352,
    name: 'Bentley',
    timestamp: '2014-06-14T04:33:38',
    download_hash: 'f32ee702-6fef-4f22-8c4a-76bad9609803',
    delete_hash: '847098e9-fc46-41c0-9c9a-b5c861d81366',
    file_type: 'Public'
  },
  {
    size: 301217,
    name: 'Gibson',
    timestamp: '2014-09-30T02:07:56',
    download_hash: '8c3ebfe1-d286-4441-8b2e-38753dbfcc4b',
    delete_hash: '01ca6073-efe4-47cd-9c3d-afca57098aa5',
    file_type: 'Shared'
  },
  {
    size: 215878,
    name: 'Bradford',
    timestamp: '2014-06-27T03:43:06',
    download_hash: 'b5ee0b72-c60a-428b-9bb3-18dd623ef7ba',
    delete_hash: '612f951e-4351-44bd-8ebe-cb0c7017192f',
    file_type: 'Public'
  },
  {
    size: 167305,
    name: 'Sykes',
    timestamp: '2018-09-05T01:03:14',
    download_hash: 'cb6e12f7-732c-4428-8259-de4e1d925835',
    delete_hash: 'd51a35b3-e258-48a8-b3e1-db2d032be25c',
    file_type: 'Private'
  },
  {
    size: 107216,
    name: 'Gilmore',
    timestamp: '2018-03-16T05:21:51',
    download_hash: '929e6685-e9f3-4776-84ca-b7c672112580',
    delete_hash: '3aa48a73-e123-4dd1-9f75-c4598c7accf7',
    file_type: 'Private'
  },
  {
    size: 393070,
    name: 'Battle',
    timestamp: '2016-10-18T06:29:40',
    download_hash: '6bdf7c21-85ef-489b-885e-68e4d097cf4a',
    delete_hash: '326f1570-253e-4d4b-95ce-98bef88cec12',
    file_type: 'Shared'
  },
  {
    size: 363405,
    name: 'Kimberly',
    timestamp: '2014-09-10T04:23:18',
    download_hash: '6d1626d1-c416-45da-9641-43f3951d4786',
    delete_hash: '37a89c1e-b219-4dc9-8427-cfd6e6edce66',
    file_type: 'Private'
  },
  {
    size: 265794,
    name: 'Trujillo',
    timestamp: '2014-08-23T08:37:50',
    download_hash: '97ea407f-f20b-417e-9eff-8a927db94e2c',
    delete_hash: '0e9a9787-4bbf-4343-9e42-ef814450b0ca',
    file_type: 'Private'
  },
  {
    size: 225281,
    name: 'Ramona',
    timestamp: '2014-04-01T07:33:42',
    download_hash: '057d831e-78f7-4cde-be4c-2a38af6a7f67',
    delete_hash: '71db3aae-cc4a-499e-8092-995c01722a1a',
    file_type: 'Shared'
  },
  {
    size: 319329,
    name: 'Norris',
    timestamp: '2014-12-23T06:29:28',
    download_hash: 'b065f755-402d-4542-b981-1103060e8ede',
    delete_hash: 'b6259168-a48b-47cf-a73b-dd6de4b74775',
    file_type: 'Public'
  },
  {
    size: 373182,
    name: 'Fowler',
    timestamp: '2017-10-01T12:13:43',
    download_hash: 'b2ff40dc-0b19-4a03-925c-05045d347c4c',
    delete_hash: '0ac9c673-da81-478f-a71d-05b2ad24dcb1',
    file_type: 'Shared'
  },
  {
    size: 44748,
    name: 'Imelda',
    timestamp: '2016-10-04T09:02:50',
    download_hash: '241d1cee-8506-429e-8435-38b7f5b26eb4',
    delete_hash: '936a6956-4e2a-4181-be5a-91c8be554a57',
    file_type: 'Shared'
  },
  {
    size: 197157,
    name: 'Yvonne',
    timestamp: '2017-05-16T03:13:52',
    download_hash: 'd074fe37-eda3-4cbb-a32c-eaaaf3b20db5',
    delete_hash: '2472a033-3e11-49b0-9b6d-4595a03582fd',
    file_type: 'Shared'
  },
  {
    size: 191625,
    name: 'Carol',
    timestamp: '2015-01-14T11:55:54',
    download_hash: '61d6a695-9c68-460f-b4f0-4a38a3c55a85',
    delete_hash: 'ae880c2b-f850-4277-9c9e-9d91931c979f',
    file_type: 'Private'
  },
  {
    size: 209389,
    name: 'Kathie',
    timestamp: '2016-11-26T11:56:38',
    download_hash: 'fa252c56-f6db-414d-b5bd-6128367f1fd8',
    delete_hash: 'a299ff46-021e-4ab0-ac18-2a367db143d9',
    file_type: 'Public'
  },
  {
    size: 125092,
    name: 'Santos',
    timestamp: '2015-04-12T12:16:09',
    download_hash: '1865fee3-d14b-4495-8d09-06b716966baf',
    delete_hash: '8d574416-88a6-4941-906d-34970adfa49a',
    file_type: 'Public'
  },
  {
    size: 210194,
    name: 'Madelyn',
    timestamp: '2014-06-07T03:01:53',
    download_hash: 'cc9ab37d-4730-49da-82b3-85bb6d585aca',
    delete_hash: '545c99dd-7d9a-433b-abba-1a1b5773c837',
    file_type: 'Public'
  },
  {
    size: 335800,
    name: 'Rosalinda',
    timestamp: '2015-09-26T09:33:20',
    download_hash: 'd091e536-89fe-46a2-9743-af59aee2e35f',
    delete_hash: '069c0eca-ada7-473c-9500-d76268036d38',
    file_type: 'Private'
  },
  {
    size: 138880,
    name: 'Madge',
    timestamp: '2014-03-27T04:53:22',
    download_hash: '90e80e76-54d8-484b-b9a0-fc575bf0ce9d',
    delete_hash: '17a5d3bd-232e-40ba-b81b-263940b5ac48',
    file_type: 'Public'
  },
  {
    size: 34375,
    name: 'Letha',
    timestamp: '2018-01-01T09:11:25',
    download_hash: 'd890c31d-8671-4c1c-a24a-84ee0759c9bc',
    delete_hash: '89aad01f-8fb4-45a1-aab9-0e9deb6431c5',
    file_type: 'Public'
  },
  {
    size: 78313,
    name: 'Hunt',
    timestamp: '2015-04-30T12:09:17',
    download_hash: 'b0d5cc94-9c5d-4f68-97e1-fd596e9e4366',
    delete_hash: '27244ff0-fde6-4c33-893c-70c8b2dc4be0',
    file_type: 'Shared'
  },
  {
    size: 395914,
    name: 'Glenna',
    timestamp: '2016-12-20T01:53:18',
    download_hash: '9f3e5a2e-1202-4059-a4f9-e7049a1ef02f',
    delete_hash: 'b6e005fb-1ff6-43e6-85f2-09420fb45ca9',
    file_type: 'Shared'
  },
  {
    size: 29166,
    name: 'Dunn',
    timestamp: '2017-08-14T05:26:37',
    download_hash: 'e4761055-0b64-4587-8b55-b7a23bb4c333',
    delete_hash: '8e971784-eb69-40db-9208-acefbd13c402',
    file_type: 'Shared'
  },
  {
    size: 390532,
    name: 'French',
    timestamp: '2015-03-24T01:32:16',
    download_hash: '6a14f377-060c-40c4-80c8-e8aebff84c15',
    delete_hash: 'c6f0cecf-1d45-4246-ab0e-f2132e0509eb',
    file_type: 'Public'
  },
  {
    size: 14482,
    name: 'Jaime',
    timestamp: '2017-06-21T11:54:57',
    download_hash: '88919fe2-7332-4461-8305-68e0bb5ca77f',
    delete_hash: 'd98c2786-a1f3-4e8a-b206-d756fa5183b4',
    file_type: 'Public'
  },
  {
    size: 394238,
    name: 'Becky',
    timestamp: '2014-11-04T12:51:34',
    download_hash: '82f90089-b5e9-451c-9a72-a4f6d194399d',
    delete_hash: '6cd03517-3141-4031-8cc3-894709295910',
    file_type: 'Private'
  }
];
