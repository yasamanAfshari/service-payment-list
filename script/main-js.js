
        //داده‌ها
        const services = [
            { id: 1, name: 'نرم‌افزار حضور غیاب', price: 5000000 },
            { id: 2, name: 'دستگاه انبارداری', price: 1000000 },
            { id: 3, name: 'دستگاه فلان', price: 850000 },
            { id: 4, name: 'نرم‌افزار حضور غیاب', price: 12000000 },
            { id: 5, name: 'دستگاه انبارداری', price: 1000000 },
            { id: 6, name: 'دستگاه انبارداری', price: 1000000 },

            { id: 5, name: 'دستگاه انبارداری', price: 1000000 },
            { id: 6, name: 'دستگاه انبارداری', price: 1000000 }


        ];

        // کانتینر اصلی
        const listcontain = document.querySelector('.list-contain');
        let totalPrice = 0;


        services.forEach((service, index) => {
            totalPrice += service.price;
            const listWrapper = document.createElement('div');
            listWrapper.className =
                'list-wrapper d-flex justify-content-between align-items-center row p-0 mt-1 mb-1';

            listWrapper.innerHTML = `
    <div class="col-sm-1 col-12 d-flex align-items-center justify-content-sm-end justify-content-center status-wrapper me-1">
      <div class="status d-flex align-items-center justify-content-center h-100">
        <span>${index + 1}</span>
      </div>
    </div>
    <div class="col-sm-11 col-12 ticket-detail m-1">
      <div class="row">
        <div class="col-12 col-sm-5 col-md-6 d-flex align-items-center p-0">
          <div class="pt-2 pb-2">
            <div class="list-tooltip">
              <div class="d-flex">
                <div class="circle me-2 d-flex justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="size-6">
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                    <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>${service.name}</span>
              </div>
              <span class="tooltiptext">نام خدمت</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-5 d-flex align-items-center p-0">
          <div class="pt-2 pb-2">
            <div class="list-tooltip">
              <div class="d-flex">
                <div class="circle me-2 d-flex justify-content-center align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="size-6">
                    <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                    <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>${service.price.toLocaleString()} تومان</span>
              </div>
              <span class="tooltiptext">قیمت</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-2 col-md-1 d-flex align-items-center p-0 delete-icon-wrapper">
          <a href="#">
            <div class="pt-2">
              <div class="list-tooltip">
                <div class="d-flex delete-icon ms-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" width="20" height="20">
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                    <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </div>
               <span class="tooltiptext">حذف</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  `;
            listcontain.appendChild(listWrapper);

            // حذف
            const deleteButton = listWrapper.querySelector('.delete-icon');
            deleteButton.addEventListener('click', (e) => {
                e.preventDefault();
                listWrapper.remove();
                totalPrice -= service.price;
                document.getElementById('total-price').textContent = totalPrice.toLocaleString() + "تومان";

            });
        });

        document.getElementById('total-price').textContent = totalPrice.toLocaleString() + "تومان";






        // کدهای تخفیف
        const discountCodes = {
            'yasaman': 0.1, // 10%
            'Y2680': 0.2  // 20%
        };
        /////
        const totalPriceElement = document.getElementById('total-price');
        const discountCodeInput = document.getElementById('discount-code');
        const applyDiscountButton = document.getElementById('apply-discount');
        const alertMessage = document.getElementById('alert-message');
        const alertMessageSucc =document.getElementById('alert-message-succ')
        const payButton = document.getElementById('pay-button');
        const successMessage = document.getElementById('success-message');
        

        applyDiscountButton.addEventListener('click', () => {
            const discountCode = discountCodeInput.value;
            if (discountCodes[discountCode]) {
                const discount = discountCodes[discountCode];
                totalPrice = totalPrice * (1 - discount);
                totalPriceElement.textContent = totalPrice.toLocaleString();
                alertMessage.style.display = 'none';
                alertMessageSucc.style.display="block";      
                applyDiscountButton.disabled = true;
                discountCodeInput.disabled = true;
               
                
            } else {
                alertMessage.style.display = 'block';
                alertMessageSucc.style.display="none";      

            }
        });
         // پرداخت
    payButton.addEventListener('click', () => {
        const toastElement = document.querySelector('.toast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();

    });

