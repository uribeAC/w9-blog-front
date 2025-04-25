import { http, HttpResponse } from "msw";
import { archivoDeLasTormentasComidaPostsDto } from "../dto/fixturesDto";
import { PostsDtoData } from "../client/types";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("Not found URL");
}

export const handlers = [
  http.get(`${apiUrl}/posts`, () => {
    return HttpResponse.json<{ postsDtoData: PostsDtoData }>({
      postsDtoData: {
        posts: archivoDeLasTormentasComidaPostsDto,
        postsTotal: archivoDeLasTormentasComidaPostsDto.length,
      },
    });
  }),
];
