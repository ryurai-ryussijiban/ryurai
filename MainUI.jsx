import React, { useState } from "react";
import { Home, User, Store, Wrench, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FansiteApp() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "profile", label: "프로필", icon: <User size={24} /> },
    { id: "home", label: "홈", icon: <Home size={24} /> },
    { id: "fan", label: "팬", icon: <Mail size={24} /> },
    { id: "suggest", label: "건의", icon: <Wrench size={24} /> },
    { id: "shop", label: "상점", icon: <Store size={24} /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <div className="p-4">🌸 프로필 탭 - 프로필 꾸미기, 편지 확인, 공유, 방문 시간, 계정 설정 등</div>;
      case "home":
        return (
          <div className="p-4 space-y-4">
            <div>🏠 홈 탭</div>
            <div>류라이 생일 디데이: 9월 16일</div>
            <div>
              SNS 링크:
              <ul className="list-disc list-inside">
                <li><a className="text-blue-500" href="https://www.tiktok.com/@ryuraikj">TikTok</a></li>
                <li><a className="text-blue-500" href="https://www.youtube.com/@rairyu1756">YouTube</a></li>
                <li><a className="text-blue-500" href="https://www.instagram.com/ryu_rai73/">Instagram</a></li>
              </ul>
            </div>
            <div>이메일: dbalsdud6646@naver.com</div>
            <div>📝 인터뷰 (개발 중)</div>
            <div>🎮 미니게임: 딸기를 피해라! (개발 중)</div>
            <div>📢 공지사항: (관리자/매니저만 작성 가능)</div>
          </div>
        );
      case "fan":
        return <div className="p-4">💌 팬 탭 - 편지 작성 및 꾸미기 (관리자만 전체 열람 가능)</div>;
      case "suggest":
        return <div className="p-4">🛠 건의 탭 - 건의/신고 작성, 관리자만 열람 가능</div>;
      case "shop":
        return (
          <div className="p-4">
            🛍 상점 탭 - 딸기 포인트 사용 (아이템 개발 중)
            <ul className="list-disc list-inside mt-2">
              <li>편지용 딸기 스티커</li>
              <li>레이스 꾸미기</li>
              <li>편지 작성권 +1</li>
              <li>부활 1회권 (게임용)</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-pink-50">
      <main className="flex-1">{renderTabContent()}</main>
      <nav className="flex justify-around items-center h-16 bg-white border-t">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center text-xs ${
              activeTab === tab.id ? "text-pink-500" : "text-gray-500"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
