import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getWpTest(): Promise<any> {
    const response = await fetch("https://cartoontoys.ga/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query HomePageQuery {
            posts {
              nodes {
                id
                title
                date
                content
              }
            }
          }
        `,
      }),
    });
  
    const json = await response.json();
    return json.data.posts
  }
}
