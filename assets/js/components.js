/* =====================================================
   생각의힘 수학학원 - 공통 컴포넌트
   파일명: assets/js/components.js

   [역할]
   모든 페이지에서 헤더와 푸터를 자동으로 생성
   페이지 위치(루트/하위폴더)를 감지해서 경로 자동 설정

   [사용법]
   각 html 파일에 아래 세 줄 추가하면 끝
   <div id="site-header"></div>
   <div id="site-footer"></div>
   <script src="경로/assets/js/components.js"></script>
   ===================================================== */

(function() {

  /* ---------------------------------------------------
     경로 자동 감지
     현재 페이지가 루트인지 하위폴더인지 판단
     루트: index.html → base = ""
     하위: about/index.html → base = "../"
  --------------------------------------------------- */
  const path = location.pathname;
  const isRoot = path === '/' || path.endsWith('index.html') && path.split('/').length <= 2;
  const depth = path.replace(/\/[^/]*$/, '').split('/').filter(Boolean).length;
  const base = depth === 0 ? '' : '../';
  /* ---------------------------------------------------
     헤더 HTML
     - 로고, 네비게이션 메뉴, 전화번호 포함
     - 메뉴 추가/수정 시 여기서만 변경하면 전체 반영
  --------------------------------------------------- */
  const headerHTML = `
    <header id="main-header">

      <div class="logo">
        <a href="${base}index.html">
          <span class="logo-main">생각의힘</span>
          <span class="logo-sub">수학학원</span>
        </a>
      </div>

      <button class="menu-toggle" id="menuToggle" aria-label="메뉴 열기">
        &#9776;
      </button>

      <nav id="main-nav">
        <ul>
          <li><a href="${base}about/index.html">학원소개</a></li>
          <li><a href="${base}admission/index.html">입학안내</a></li>
          <li><a href="${base}curriculum/index.html">커리큘럼</a></li>
          <li><a href="${base}schedule/index.html">시간표</a></li>
          <li><a href="${base}news/index.html">학원소식</a></li>
        </ul>
      </nav>

      <div class="header-phone">
        <a href="tel:031-272-8209">031-272-8209</a>
      </div>

    </header>
  `;

  /* ---------------------------------------------------
     푸터 HTML
     - 학원 기본 정보, 메뉴 링크, 저작권 포함
  --------------------------------------------------- */
  const footerHTML = `
    <footer id="main-footer">

      <div class="footer-inner">

        <div class="footer-info">
          <p class="footer-name">생각의힘 수학학원</p>
          <p>경기도 용인시 수지구 신봉동 수지 신봉종합상가 4층</p>
          <p>Tel: <a href="tel:031-272-8209">031-272-8209</a></p>
        </div>

        <nav class="footer-nav">
          <ul>
            <li><a href="${base}about/index.html">학원소개</a></li>
            <li><a href="${base}admission/index.html">입학안내</a></li>
            <li><a href="${base}curriculum/index.html">커리큘럼</a></li>
            <li><a href="${base}schedule/index.html">시간표</a></li>
            <li><a href="${base}news/index.html">학원소식</a></li>
          </ul>
        </nav>

        <p class="footer-copy">
          © 2025 생각의힘 수학학원. All rights reserved.
        </p>

      </div>

    </footer>
  `;

  /* ---------------------------------------------------
     헤더/푸터 각 페이지에 삽입
     id="site-header", id="site-footer" 를 찾아서 채워넣음
  --------------------------------------------------- */
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (headerEl) headerEl.innerHTML = headerHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

  /* ---------------------------------------------------
     모바일 햄버거 메뉴 동작
     헤더 삽입 후 버튼 이벤트 연결
  --------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('nav-open');
    });
  }

})();
