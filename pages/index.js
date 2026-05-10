onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="تحدث مع مدربك..." 
              />
              <button 
                style={{ padding: "12px 24px", backgroundColor: "#0ea5e9", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
                onClick={sendMessage}
              >إرسال</button>
            </div>
          </section>

          {/* Sidebar Stats */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Calories Card */}
            <div style={{ backgroundColor: "#1e293b", borderRadius: "15px", padding: "15px", borderRight: "4px solid #f59e0b" }}>
              <h4 style={{ margin: "0 0 10px 0", color: "#f59e0b" }}>🔥 السعرات</h4>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{totalCalories} <span style={{ fontSize: "0.9rem", color: "#94a3b8" }}>سعرة</span></div>
            </div>

            {/* Fasting Card */}
            <div style={{ backgroundColor: "#1e293b", borderRadius: "15px", padding: "15px", borderRight: "4px solid #8b5cf6" }}>
              <h4 style={{ margin: "0 0 10px 0", color: "#8b5cf6" }}>⏱️ الصيام</h4>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{fastingHours} <span style={{ fontSize: "0.9rem", color: "#94a3b8" }}>ساعة</span></div>
              <button 
                onClick={() => setFastingStart(fastingStart ? null : Date.now())}
                style={{ marginTop: "10px", width: "100%", padding: "8px", borderRadius: "5px", border: "none", backgroundColor: fastingStart ? "#ef4444" : "#8b5cf6", color: "#fff", cursor: "pointer" }}
              >
                {fastingStart ? "إنهاء الصيام" : "ابدأ الصيام"}
              </button>
            </div>

            {/* Food Log Quick Add */}
            <div style={{ backgroundColor: "#1e293b", borderRadius: "15px", padding: "15px" }}>
              <h4 style={{ margin: "0 0 10px 0", color: "#10b981" }}>🥗 أضف وجبة</h4>
              <input style={{ width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "5px", border: "none", backgroundColor: "#334155", color: "#fff" }} placeholder="اسم الأكلة" value={foodName} onChange={e => setFoodName(e.target.value)} />
              <input style={{ width: "100%", marginBottom: "10px", padding: "8px", borderRadius: "5px", border: "none", backgroundColor: "#334155", color: "#fff" }} type="number" placeholder="السعرات" value={foodCalories} onChange={e => setFoodCalories(e.target.value)} />
              <button 
                onClick={() => { setFoods([...foods, { name: foodName, calories: Number(foodCalories) }]); setFoodName(""); setFoodCalories(0); }}
                style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "none", backgroundColor: "#10b981", color: "#fff", cursor: "pointer" }}
              >إضافة</button>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
