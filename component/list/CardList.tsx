import theme from '../../component/common/theme';
import styled from 'styled-components';
import Link from 'next/link';
import imgListNone from '../../public/assets/images/common/img_list_base.png';

export default function CardList({ itemList }) {
  const CardBox = styled.div`
    display: block;
    padding: 2rem;
    text-align: left;
    h1 {
      padding: 1rem 1.2rem;
      font-weight: 300;
      font-size: 3rem;
      color: #000;
    }
    .btn-write {
      position: fixed;
      right: 4rem;
      bottom: 4rem;
      width: 8rem;
      height: 8rem;
      background: #4c7d5f url(/assets/images/list/btn_write.png) no-repeat 50% 50% / 4rem auto;
      border-radius: 100%;
      text-indent: -999rem;
      transition: 0.3s;
      &:hover {
        background-color: ${theme.colors.subColor};
        transform: scale(1.1);
      }
    }
  `;
  const CardItem = styled.div`
    display: inline-block;
    position: relative;
    width: calc(33.3% - 2.4rem);
    margin: 1.2rem;
    font-size: 1.4rem;
    color: #000;
    border-radius: 1rem;
    border: 0.1rem solid #eee;
    box-shadow: 0.1rem 0.1rem 3.3rem rgb(0 0 0 / 15%);
    text-align: center;
    cursor: pointer;
    transition: 0.25s;
    overflow: hidden;
    &:hover {
      color: ${theme.colors.fontPointColor};
      background-color: ${theme.colors.bgPointColor};
      transform: scale(1.05);
      dt {
        background-size: 110% auto;
      }
    }
    dl {
      dt {
        height: 16rem;
        background: #fff url(/assets/images/common/img_list_base.png) no-repeat 50% 50% / 100% auto;
        border-bottom: 0.1rem solid #eee;
        transition: 0.3s;
      }
      dd {
        padding: 2rem 2rem 2.4rem;
        text-align: left;
        strong {
          display: -webkit-box;
          white-space: normal;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        p {
          display: -webkit-box;
          height: 3.5rem;
          padding-top: 0.5rem;
          font-weight: 300;
          white-space: normal;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
    @media ${({ theme }) => theme.device.pad} {
      width: calc(50% - 2.4rem);
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: calc(100% - 2.4rem);
    }
  `;

  return (
    <>
      <CardBox>
        <h1>싹로그</h1>
        {itemList &&
          itemList.map((item) => {
            return (
              <CardItem key={item.id}>
                <dl>
                  <dt
                    style={{
                      backgroundImage: 'url(' + (item.image ? item.image : imgListNone) + ')',
                    }}
                  ></dt>
                  <dd>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </dd>
                </dl>
              </CardItem>
            );
          })}
        <Link href="/Write" passHref>
          <a className="btn-write">글쓰기</a>
        </Link>
      </CardBox>
    </>
  );
}
