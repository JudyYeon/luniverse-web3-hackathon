/**
 * * ***** 사전 입력 창 *****
 * * 인증 토큰 입력
 * * API Docs: https://developer.luniverse.io/reference/multichain-auth
 * */
export const authToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoYkg5RmlFMkZfcEFSY2RWeWxGaHNtVVY1blZfOEVGYXN4VlVyajVtRU9JIn0.eyJleHAiOjE2ODUwOTUxNDQsImlhdCI6MTY4NDQ5MDM0NCwianRpIjoiNzQ5NGUzMTAtYTY5OC00MzA2LTljNmYtM2QyZDA1YjA1ZTZjIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmx1bml2ZXJzZS5jb206MzEwMC9yZWFsbXMvbm92YSIsInN1YiI6IjZlNmNiOTgyLTBjMjMtNDZiNS1iMDA5LTk5M2Q2N2Q3M2UwYSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjE2ODQ0ODg3MjI5NjAxNjM5NzAiLCJzZXNzaW9uX3N0YXRlIjoiMzI2YTMwOWYtODNhMy00ZTM3LThjMjMtMTI5NDg2YjQyNWNiIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW5vdmEiXX0sInNjb3BlIjoicHJvZmlsZSIsInNpZCI6IjMyNmEzMDlmLTgzYTMtNGUzNy04YzIzLTEyOTQ4NmI0MjVjYiIsInByZWZlcnJlZF91c2VybmFtZSI6IjE2ODQ0ODg3MjI5NjAxNjM5NzA6dXp2YnRkeW1lenBlY21hamFlaHl1NGR4ZWQ5dXE2ZXVwY3dzYXZ6a214emNsc2Rlc2R4ZmI3YXBieTRjbWRnNCIsImdyYW50Ijp7InByb3RvY29scyI6IjIiLCJhY2NvdW50cyI6IjIiLCJibG9ja3MiOiIyIiwidHJhbnNhY3Rpb25zIjoiMiIsImFzc2V0cyI6IjIiLCJldmVudHMiOiIyIiwic3RhdHMiOiIyIiwid2ViaG9va3MiOiIyIn19.ce3dAgwZ11WSZ80BjbKGFBdwIACzKwTGbnSFGOVjCb5PHfQlKPU-aDf3GM2ma3Y-z3mYdviG-J7bShNZEfG1UnZyu0o4B1s6SfbYEpR0F_HX-dGS1BjeN15KABJJRV0BibC5OZIJXpDlXT73GgRhgIPWyqTP3rFWdg3-s-tQ2AP-eIgSl7VmduFWgef_27CWvBxSYs5ZHZNACj-KedDRjw8hV19USMF7CQ1r5sv8D8xmH-vdtP5e3I6ZS8lWFh9ygfTN7yRbH7dGgOgGAxozIyCCJN8N-yzJ3g-_lG3qfqNNshWB-AOlK8aPawfSCzk0ehWSzcKsF02bf6VKhGK9Jg";

/** 아래 제공된 API Docs를 확인하여 알맞은 Query Params 값을 입력해주세요! **/
/**
 * * ***** 예시 *****
 * * 문제: ETH 잔고 조회
 * * API Docs: https://developer.luniverse.io/reference/getaccountbalance
 * */
export const example = {
	// 여기를 채워주세요!
	type: "native",
};

/**
 * * ***** Mission 1 *****
 * * 문제: 보유한 ERC20 토큰 정보 조회
 * * API Docs: https://developer.luniverse.io/reference/getaccountbalance
 * */
export const answer1 = {
	// 여기를 채워주세요!
	type : "ft"
};

/**
 * * ***** Mission 2 *****
 * * 문제: 보유한 ERC721 정보 조회
 * * API Docs: https://developer.luniverse.io/reference/getaccountbalance
 * */
export const answer2 = {
	// 여기를 채워주세요!
	type : "nft"
};

/**
 * * ***** Mission 3 *****
 * * 문제: 컨트랙트의 시간별 활성 계정 수 조회 (범위: 5월 17일 00시 ~ 5월 18일 00시)
 * * API Docs: https://developer.luniverse.io/reference/gethourlycontracttransactionsstat
 * */
export const answer3 = {
	// 여기를 채워주세요!
	startDateTime : "2022-05-17-00",
	endDateTime : "2022-05-18-00"
};

/**
 * * ***** Mission 4 *****
 * * 문제: 컨트랙트의 일별 트랜잭션 발생량 조회 (범위: 4월 1일 ~ 4월 30일)
 * * 설명: API Docs를 확인하여 Query Params에 들어갈 값을 입력해주세요.
 * * API Docs: https://developer.luniverse.io/reference/getdailycontractactiveaccountstats
 * */
export const answer4 = {
	// 여기를 채워주세요!
	startDate : "2022-04-01",
	endDate : "2022-04-30"
};
