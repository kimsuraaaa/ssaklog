import Head from 'next/head';

type HeadInfoProps = {
  title: string;
  keyword: string;
  contents: string;
  description: string;
};

const HeadInfo = ({ title, keyword, contents, description }: HeadInfoProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keyword" content={keyword} />
        <meta name="contents" content={contents} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

HeadInfo.defaultProps = {
  title: 'SSAKLOG',
  keyword: '싹로그',
  contents: '당신은 싹이 될 상인가',
  description: '진정한 아싸라면 싹로그 하나쯤 있어야죠',
};

export default HeadInfo;
