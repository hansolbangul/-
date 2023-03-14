function solution(genres, plays) {
  // 각 장르별 총 재생수를 저장할 객체
  const totalPlays = {};

  // 각 곡의 장르와 재생수를 저장한 객체
  const songs = [];

  // 객체 초기화
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    songs.push({ idx: i, genre: genre, play: play });
    if (!totalPlays[genre]) totalPlays[genre] = 0;
    totalPlays[genre] += play;
  }

  // 총 재생수 내림차순으로 정렬한 장르 목록
  const sortedGenres = Object.keys(totalPlays).sort((a, b) => totalPlays[b] - totalPlays[a]);

  // 장르 내에서 재생수 내림차순, 인덱스 오름차순으로 정렬한 노래 목록
  const sortedSongs = songs.sort((a, b) => {
    if (a.genre !== b.genre) return totalPlays[b.genre] - totalPlays[a.genre];
    if (a.play !== b.play) return b.play - a.play;
    return a.idx - b.idx;
  });

  // 베스트 앨범에 수록할 노래의 인덱스를 저장할 배열
  const answer = [];

  // 각 장르별로 두 곡씩 베스트 앨범에 추가
  for (let i = 0; i < sortedGenres.length; i++) {
    const genre = sortedGenres[i];
    const genreSongs = sortedSongs.filter((song) => song.genre === genre);
    answer.push(genreSongs[0].idx);
    if (genreSongs.length > 1) answer.push(genreSongs[1].idx);
  }

  return answer;
}
