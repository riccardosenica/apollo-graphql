import React from 'react';
import Link from './Link';

import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
    const { data } = useQuery(FEED_QUERY);

    return (
        <div>
            {data && (
                <>
                    {data.feed.links.map((link) => (
                        <Link key={link.id} link={link} />
                    ))}
                </>
            )}
        </div>
    );
};

// const LinkList = () => {
//     const linksToRender = [
//         {
//             id: '1',
//             description:
//                 'Link first😎',
//             url: 'https://prisma.io'
//         },
//         {
//             id: '2',
//             description: 'Link zwei',
//             url: 'https://www.apollographql.com/docs/react/'
//         }
//     ];

//     return (
//         <div>
//             {linksToRender.map((link) => (
//                 <Link key={link.id} link={link} />
//             ))}
//         </div>
//     );
// };

export default LinkList;