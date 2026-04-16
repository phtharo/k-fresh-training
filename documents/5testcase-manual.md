# 🧪 Test Cases – Add to Cart Module

---

# TC_CART_001

## 1. 📌 Core Information
- **Test Case ID:** TC_CART_001  
- **Title:** Verify user can add product to cart successfully  
- **Module/Feature:** Add to Cart  
- **Requirement ID:** CART-001  
- **Priority:** High  
- **Severity:** Major  
- **Test Type:** Functional  
- **Automation:** Yes  

## 2. 🧩 Preconditions
- User truy cập website thành công  
- Product có sẵn (In Stock)  
- User đang ở trang product detail  

## 3. 🔄 Test Steps & Expected Results

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Navigate to product detail page | Product detail page is displayed |
| 2 | Click “Add to Cart” button | Success message is displayed |
| 3 | Check cart icon | Cart quantity is increased by 1 |
| 4 | Open mini cart | Product is displayed in cart |

## 4. 📊 Test Data

| Field | Value |
|------|-------|
| Product | Any available product |
| Quantity | 1 |

## 5. ✅ Postconditions
- Product được thêm vào cart  

## 6. 🐞 Execution Result

| Field | Description |
|------|------------|
| Status | |
| Actual Result | |
| Defect ID | |
| Executed By | |
| Execution Date | |

## 7. 📝 Notes / Attachments
- Screenshot nếu fail  

---

# TC_CART_002

## 1. 📌 Core Information
- **Test Case ID:** TC_CART_002  
- **Title:** Verify user can add product with multiple quantity successfully  
- **Module/Feature:** Add to Cart  
- **Requirement ID:** CART-002  
- **Priority:** High  
- **Severity:** Major  
- **Test Type:** Functional  
- **Automation:** Yes  

## 2. 🧩 Preconditions
- Product available  
- User ở trang product detail  

## 3. 🔄 Test Steps & Expected Results

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Navigate to product detail page | Page is displayed |
| 2 | Enter quantity = 3 | Quantity field accepts value |
| 3 | Click “Add to Cart” | Success message displayed |
| 4 | Open cart | Product quantity = 3 |

## 4. 📊 Test Data

| Field | Value |
|------|-------|
| Product | Any available product |
| Quantity | 3 |

## 5. ✅ Postconditions
- Cart chứa product với quantity = 3  

## 6. 🐞 Execution Result

| Field | Description |
|------|------------|
| Status | |
| Actual Result | |
| Defect ID | |
| Executed By | |
| Execution Date | |

## 7. 📝 Notes / Attachments
- Screenshot nếu fail  

---

# TC_CART_003

## 1. 📌 Core Information
- **Test Case ID:** TC_CART_003  
- **Title:** Verify system updates quantity when adding same product multiple times  
- **Module/Feature:** Add to Cart  
- **Requirement ID:** CART-003  
- **Priority:** High  
- **Severity:** Major  
- **Test Type:** Functional  
- **Automation:** Yes  

## 2. 🧩 Preconditions
- Product đã có trong cart (quantity = 1)  

## 3. 🔄 Test Steps & Expected Results

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click “Add to Cart” again | Success message displayed |
| 2 | Open cart | Quantity is increased (e.g., 2) |

## 4. 📊 Test Data

| Field | Value |
|------|-------|
| Product | Same product |
| Initial Quantity | 1 |

## 5. ✅ Postconditions
- Quantity được cộng dồn  

## 6. 🐞 Execution Result

| Field | Description |
|------|------------|
| Status | |
| Actual Result | |
| Defect ID | |
| Executed By | |
| Execution Date | |

## 7. 📝 Notes / Attachments
- Verify không tạo duplicate item  

---

# TC_CART_004

## 1. 📌 Core Information
- **Test Case ID:** TC_CART_004  
- **Title:** Verify user can add available product to cart successfully  
- **Module/Feature:** Add to Cart  
- **Requirement ID:** CART-004  
- **Priority:** High  
- **Severity:** Major  
- **Test Type:** Functional  
- **Automation:** Yes  

## 2. 🧩 Preconditions
- Product còn hàng  
- User đang ở product list hoặc product detail  

## 3. 🔄 Test Steps & Expected Results

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click “Add to Cart” từ product list | Success message displayed |
| 2 | Check cart icon | Cart updated correctly |

## 4. 📊 Test Data

| Field | Value |
|------|-------|
| Product | Available product |

## 5. ✅ Postconditions
- Product added vào cart  

## 6. 🐞 Execution Result

| Field | Description |
|------|------------|
| Status | |
| Actual Result | |
| Defect ID | |
| Executed By | |
| Execution Date | |

## 7. 📝 Notes / Attachments
- Verify từ nhiều entry point  

---

# TC_CART_005

## 1. 📌 Core Information
- **Test Case ID:** TC_CART_005  
- **Title:** Verify cart displays correct product and quantity after adding  
- **Module/Feature:** Add to Cart  
- **Requirement ID:** CART-005  
- **Priority:** High  
- **Severity:** Major  
- **Test Type:** Functional  
- **Automation:** Yes  

## 2. 🧩 Preconditions
- Product đã được thêm vào cart  

## 3. 🔄 Test Steps & Expected Results

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open cart page | Cart page is displayed |
| 2 | Verify product name | Correct product name displayed |
| 3 | Verify quantity | Quantity is correct |
| 4 | Verify total price | Total price calculated correctly |

## 4. 📊 Test Data

| Field | Value |
|------|-------|
| Product | Any |
| Quantity | 1+ |

## 5. ✅ Postconditions
- Cart hiển thị đúng dữ liệu  

## 6. 🐞 Execution Result

| Field | Description |
|------|------------|
| Status | |
| Actual Result | |
| Defect ID | |
| Executed By | |
| Execution Date | |

## 7. 📝 Notes / Attachments
- Compare UI vs expected price  

---