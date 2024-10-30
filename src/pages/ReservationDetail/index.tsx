import React, { useEffect, useState, useRef } from 'react';
import * as _ from './style';
import MenuBar from 'components/MenuBar';
import RightArrow from 'assets/icon/RightArrow';
import MainImg from 'assets/image/MainImg.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import axios from 'axios';
import Puls from 'assets/Icon/Puls';
import Return from 'assets/Icon/Return';
import Minus from 'assets/Icon/Minus';
import PlusBlack from 'assets/Icon/PlusBlack';
import Info from 'assets/Icon/Info';

const ReservationDetail = () => {
  const history = useNavigate();
  const location = useLocation();
  const [locationData, setLocationData] = useState<any>([]);
  const [centerPosition, setCenterPosition] = useState({
    lat: 37.30138197654,
    lng: 126.865110591908
  });
  const [level, setLevel] = useState<number>(3);
  const mapRef = useRef<any>(null);
  const [pathCoordinates, setPathCoordinates] = useState<
    Array<{ lat: number; lng: number }>
  >([]);
  const [taxiPrice, setTaxiPrice] = useState<number | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [request, setRequest] = useState<string>();

  const queryParams = new URLSearchParams(location.search);
  const start = queryParams.get('start');
  const end = queryParams.get('end');
  const day = queryParams.get('day');
  const hour = queryParams.get('hour');
  const minute = queryParams.get('minute');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const StartResponse = await axios(
          `https://dapi.kakao.com/v2/local/search/address?query=${start}&page=1&size=15&analyze_type=similar`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`
            }
          }
        );
        const EndResponse = await axios(
          `https://dapi.kakao.com/v2/local/search/address?query=${end}&page=1&size=15&analyze_type=similar`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`
            }
          }
        );

        const queryParams = new URLSearchParams({
          origin: `${StartResponse.data.documents[0].x}, ${StartResponse.data.documents[0].y}`,
          destination: `${EndResponse.data.documents[0].x}, ${EndResponse.data.documents[0].y}`
        });

        const Location = await axios(
          `https://apis-navi.kakaomobility.com/v1/directions?${queryParams}`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
              'Content-Type': 'application/json'
            }
          }
        );

        const path = Location.data.routes[0].sections[0].roads.flatMap(
          (road: any) => {
            const coordinates = [];
            for (let i = 0; i < road.vertexes.length; i += 2) {
              coordinates.push({
                lat: road.vertexes[i + 1],
                lng: road.vertexes[i]
              });
            }
            return coordinates;
          }
        );
        setPathCoordinates(path);
        const initialPrice = Number(Location.data.routes[0].summary.fare.taxi);
        setTaxiPrice(initialPrice);
        setOriginalPrice(initialPrice);

        const newCenter = {
          lat:
            (StartResponse.data.documents[0].y * 1 +
              EndResponse.data.documents[0].y * 1) /
            2,
          lng:
            (StartResponse.data.documents[0].x * 1 +
              EndResponse.data.documents[0].x * 1) /
            2
        };
        setLocationData({
          startX: StartResponse.data.documents[0].y,
          startY: StartResponse.data.documents[0].x,
          endX: EndResponse.data.documents[0].y,
          endY: EndResponse.data.documents[0].x
        });
        setCenterPosition(newCenter);
      } catch (error) {
        console.error('위치 데이터 조회 실패:', error);
      }
    };

    if (start) {
      fetchLocation();
    }
  }, [start]);

  useEffect(() => {
    if (locationData.startX && locationData.endX) {
      const bounds = new kakao.maps.LatLngBounds();
      bounds.extend(
        new kakao.maps.LatLng(locationData.startX, locationData.startY)
      );
      bounds.extend(
        new kakao.maps.LatLng(locationData.endX, locationData.endY)
      );

      const map = mapRef.current;
      if (map) {
        map.setBounds(bounds);
        setLevel(map.getLevel());
      }
    }
  }, [locationData]);

  const handlePriceChange = (percentage: number) => {
    if (originalPrice) {
      const maxPrice = originalPrice * 1.3; // 최대 30% 증가
      const newPrice =
        percentage === 0
          ? originalPrice
          : originalPrice * (1 + percentage / 100);

      if (newPrice <= maxPrice) {
        setTaxiPrice(Math.round(newPrice));
      } else {
        alert('최대 30%까지만 인상 가능합니다.');
        setTaxiPrice(originalPrice);
      }
    }
  };

  const handlePassengerIncrease = () => {
    if (passengerCount < 4) {
      setPassengerCount((prev) => prev + 1);
    }
  };

  const handlePassengerDecrease = () => {
    if (passengerCount > 1) {
      setPassengerCount((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const data = await axios.post(
      'https://swing-be-stag.xquare.app/reservation',
      {
        origin: start,
        destination: end,
        time: `${hour}:${minute}`,
        charge: taxiPrice,
        personnel: passengerCount,
        request: request,
        date: day
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }
    );
    if (data.status === 200) {
      alert('예약 생성 성공');
      history('/');
    }
  };

  return (
    <_.Main_Container>
      <_.Main_Titile>
        장거리 갈 때
        <br />
        <_.Main_Title_Highlight>스윙 경매 예약</_.Main_Title_Highlight>으로
        합리적이게
      </_.Main_Titile>
      <_.Main_Info>
        경매서비스 알아보기 <RightArrow width="16" height="16" color="black" />
      </_.Main_Info>
      <_.Main_Img src={MainImg} alt="MainImg" />
      <_.Main_Map>
        출발/도착
        <Map
          center={centerPosition}
          style={{ width: '320px', height: '320px' }}
          level={level}
          ref={mapRef}
        >
          <MapMarker
            position={{
              lat: locationData.startX,
              lng: locationData.startY
            }}
          />
          <MapMarker
            position={{
              lat: locationData.endX,
              lng: locationData.endY
            }}
          />
          <Polyline
            path={pathCoordinates}
            strokeWeight={5}
            strokeColor="#FF0000"
            strokeOpacity={0.7}
            strokeStyle="solid"
          />
        </Map>
      </_.Main_Map>
      <_.Main_Location_Select>
        <_.Main_Start_Box
          onClick={() => {
            history('/searchlocation');
          }}
        >
          <_.Main_Start_Dot color={true} />
          {start ? start : '어디서 출발하시나요?'}
        </_.Main_Start_Box>

        <_.Main_Provider />

        <_.Main_Start_Box
          onClick={
            start
              ? () => {
                  history(`/searchlocation?start=${start}`);
                }
              : () => {
                  history(`/searchlocation`);
                }
          }
        >
          <_.Main_Start_Dot color={false} />
          {end ? end : ' 어디로 떠나시나요?'}
        </_.Main_Start_Box>
      </_.Main_Location_Select>
      <_.Main_Provider_Select />
      <_.Main_StartTime>
        출발시간
        <_.Main_TimePicker>
          <div>
            {day} {hour}:{minute}
          </div>
          <RightArrow width="20" height="20" color="black" />
        </_.Main_TimePicker>
      </_.Main_StartTime>
      <_.Main_Provider_Select />
      <_.Main_TaxiPrice onClick={() => inputRef.current?.focus()}>
        기본요금
        <_.Main_TaxiPricePicker>
          <div>
            ₩{' '}
            <_.Main_TaxiPriceInput
              ref={inputRef}
              type="number"
              value={taxiPrice}
              onChange={(e) => {
                const newPrice = Number(e.currentTarget.value);
                const maxPrice = originalPrice * 1.3;
                if (newPrice <= maxPrice) {
                  setTaxiPrice(newPrice);
                } else {
                  alert('최대 30%까지만 인상 가능합니다.');
                  setTaxiPrice(originalPrice);
                }
              }}
            />
          </div>
          <div onClick={() => inputRef.current?.focus()}>
            <Puls />
          </div>
        </_.Main_TaxiPricePicker>
        <_.Main_TaxiPriceUppers>
          <_.Main_TaxiPriceUpper onClick={() => handlePriceChange(0)}>
            <Return />
          </_.Main_TaxiPriceUpper>
          <_.Main_TaxiPriceUpper onClick={() => handlePriceChange(5)}>
            +5%
          </_.Main_TaxiPriceUpper>
          <_.Main_TaxiPriceUpper onClick={() => handlePriceChange(10)}>
            +10%
          </_.Main_TaxiPriceUpper>
          <_.Main_TaxiPriceUpper onClick={() => handlePriceChange(15)}>
            +15%
          </_.Main_TaxiPriceUpper>
          <_.Main_TaxiPriceUpper onClick={() => handlePriceChange(20)}>
            +20%
          </_.Main_TaxiPriceUpper>
        </_.Main_TaxiPriceUppers>
        <_.Main_TaxiPriceInfo>
          최대 인상 가능 요금은 <span>30%</span>에요.
        </_.Main_TaxiPriceInfo>
      </_.Main_TaxiPrice>
      <_.Main_Provider_Select />
      <_.Main_Boarding_Info>
        탑승 정보
        <_.Main_Boarding_Info_Num>
          <_.Main_Boarding_Info_Title>
            탑승인원
            <span>최대 4명 탑승</span>
          </_.Main_Boarding_Info_Title>

          <_.Main_Boarding_Info_Input>
            <div
              onClick={handlePassengerDecrease}
              style={{ cursor: 'pointer' }}
            >
              <Minus />
            </div>
            <input type="number" value={passengerCount} readOnly />
            <div
              onClick={handlePassengerIncrease}
              style={{ cursor: 'pointer' }}
            >
              <PlusBlack />
            </div>
          </_.Main_Boarding_Info_Input>
        </_.Main_Boarding_Info_Num>
        요청사항
        <_.Main_Boarding_Info_Request
          type="text"
          placeholder="예시) 캐리어가 1개 있어요"
          onChange={(e) => {
            setRequest(e.currentTarget.value);
          }}
        />
      </_.Main_Boarding_Info>

      <_.Main_Provider_Select />

      <_.Main_Pay>
        <_.Main_Pay_Title>
          <span>결제 정보</span>
          <div>
            운임 및 취소정책 <Info />
          </div>
        </_.Main_Pay_Title>

        <_.Main_Pay_Card>
          카카오페이
          <div>
            <span>쿠폰 0</span>
            <span>포인트 0P</span>
            <RightArrow width="20" height="20" color="black" />
          </div>
        </_.Main_Pay_Card>

        <_.Main_Pay_Button onClick={handleSubmit}>
          {taxiPrice?.toLocaleString()}원 경매 시작하기
        </_.Main_Pay_Button>
      </_.Main_Pay>

      <MenuBar selectState={1} />
    </_.Main_Container>
  );
};

export default ReservationDetail;
