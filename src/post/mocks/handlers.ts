import { http, HttpResponse } from "msw";
import {
  archivoDeLasTormentasComidaPostsDto,
  huevosRotosBruc159PostDto,
} from "../dto/fixturesDto";
import { PostDto } from "../dto/types";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("Not found URL");
}

export const handlers = [
  http.get(`${apiUrl}/posts`, () => {
    return HttpResponse.json<{ posts: PostDto[]; postsTotal: number }>({
      posts: archivoDeLasTormentasComidaPostsDto,
      postsTotal: archivoDeLasTormentasComidaPostsDto.length,
    });
  }),

  http.post(`${apiUrl}/posts`, () => {
    return HttpResponse.json<PostDto>(huevosRotosBruc159PostDto);
  }),
];
