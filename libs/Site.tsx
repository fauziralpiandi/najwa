interface Site {
  domain: string;
  baseUrl: string;
  title: string;
  description: string;
  locale: string;
}

interface Verify {
  google: string;
}

export const site: Site = {
  domain: 'zira.my.id',
  baseUrl: 'https://zira.my.id',
  title: 'Fauzira Alpiandi',
  description: 'Developer, writer.',
  locale: 'id-ID',
};

export const verify: Verify = {
  google: 'xuMdCxKom7IZ2YwCTzVJli3Sp_bvt-nofj8Q1iBjPf0',
};